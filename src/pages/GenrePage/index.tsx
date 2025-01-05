import { useEffect, useState } from 'react';
import { animesToAnimeInfo } from '@/utils/functions';
import { useParams } from 'react-router-dom';
import NavPagination from '@/components/NavPagination';
import AnimesSection from '@/components/AnimesSection';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Genres from '@/components/Genres';
import Modal from '@/components/Modal';
import api from '@/utils/api';
import '@/styles/PagesStyleBase.css';

const GenrePage = () => {
  const params = useParams();

  const [animesAPI, setAnimesAPI] = useState({
    data: [],
    pagination: { last_visible_page: 0, has_next_page: false, current_page: 0 },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    api
      .getAnimesByGenreOnPage(params.genreNumber || '', params.page || '')
      .then((res) => {
        setAnimesAPI(res);
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.genreNumber, params.page]);

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesSection
            title={params.genreName}
            animes={animesToAnimeInfo(animesAPI.data)}
            isLoading={isLoading}
            children={
              <NavPagination
                genreName={params.genreName}
                genreNumber={params.genreNumber}
                pagination={animesAPI.pagination}
              />
            }
          />
          <Genres />
        </div>
      </div>
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default GenrePage;
