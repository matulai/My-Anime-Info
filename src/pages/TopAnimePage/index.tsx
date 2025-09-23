import { useEffect, useState } from 'react';
import { getTopAnimeByPage } from '@/utils/api';
import { animesToAnimeInfo } from '@/utils/functions';
import { useParams } from 'react-router-dom';
import Pagination from '@/components/Pagination';
import AnimesSection from '@/components/AnimesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Genres from '@/components/Genres';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const TopAnimePage = () => {
  const params = useParams();

  const [animesAPI, setAnimesAPI] = useState({
    data: [],
    pagination: { last_visible_page: 0, has_next_page: false, current_page: 0 },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getTopAnimeByPage(params.page || '')
      .then((res) => {
        setAnimesAPI(res);
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.page]);

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesSection
            title="Top Anime"
            animes={animesToAnimeInfo(animesAPI.data)}
            isLoading={isLoading}
            children={
              <Pagination
                url={`/top/anime`}
                pagination={animesAPI.pagination}
              />
            }
          />
          <Genres />
        </div>
      </div>
      <Footer isLoading={isLoading} />
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default TopAnimePage;
