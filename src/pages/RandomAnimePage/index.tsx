import { useEffect, useState } from 'react';
import { toAnimeInfo } from '@/utils/functions';
import { Anime } from '@/utils/globalTypes';
import AnimesSection from '@/components/AnimesSection';
import RefreshIcon from '@/components/Icons/RefreshIcon';
import Genres from '@/components/Genres';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import api from '@/utils/api';
import '@/styles/PagesStyleBase.css';

const RandomAnimePage = () => {
  const [randomAnimes, setRandomAnimes] = useState<Anime[]>([]);
  const [wantRefresh, setWantRefresh] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      api
        .getRandomAnime()
        .then((res) => {
          setRandomAnimes((prevAnimes) => [
            ...prevAnimes,
            toAnimeInfo(res.data),
          ]);
        })
        .catch((err) => {
          setModalMessage(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [wantRefresh]);

  const refresh = () => {
    setIsLoading(true);
    setRandomAnimes([]);
    setWantRefresh(!wantRefresh);
  };

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesSection
            title={'random animes'}
            animes={randomAnimes}
            isLoading={isLoading}
            children={
              <Button
                children={<RefreshIcon />}
                type={'onlyicon'}
                onClick={refresh}
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

export default RandomAnimePage;
