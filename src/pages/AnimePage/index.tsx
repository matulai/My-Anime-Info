import { useEffect, useState } from 'react';
import { toAnimeInfo } from '@/utils/functions';
import { useParams } from 'react-router-dom';
import { Anime } from '@/utils/globalTypes';
import AnimeInfo from '@/components/AnimeInfo';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import api from '@/utils/api';
import '@/styles/PagesStyleBase.css';

const AnimePage = () => {
  const params = useParams();

  const [anime, setAnime] = useState<Anime>({
    id: 0,
    title: '',
    imageUrl: '',
    synopsis: '',
    genres: [],
    episodes: 0,
    status: '',
    season: '',
    year: 0,
    trailerEmbedUrl: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    api
      .getAnimeById(Number(params.animeId))
      .then((res) => {
        setAnime(toAnimeInfo(res.data));
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.animeId]);

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimeInfo anime={anime} isLoading={isLoading} />
        </div>
      </div>
      <Footer isLoading={isLoading} />
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default AnimePage;
