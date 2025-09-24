import { getAnimeByNameOnPage } from '@/utils/api';
import { useEffect, useState } from 'react';
import { animesToAnimeInfo } from '@/utils/functions';
import { useParams } from 'react-router-dom';
import NavPagination from '@/components/Pagination';
import AnimesSection from '@/components/AnimesSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Genres from '@/components/Genres';
import Title from '@/components/Title';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const SearchPage = () => {
  const params = useParams();

  const [animesAPI, setAnimesAPI] = useState({
    data: [],
    pagination: { last_visible_page: 0, has_next_page: false, current_page: 0 },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getAnimeByNameOnPage(params.animeName || '', params.page || '')
      .then((res) => {
        setAnimesAPI(res);
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.animeName, params.page]);

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Title />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesSection
            title={params.animeName}
            animes={animesToAnimeInfo(animesAPI.data)}
            isLoading={isLoading}
            children={
              <NavPagination
                url={`/search/${params.animeName}`}
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

export default SearchPage;
