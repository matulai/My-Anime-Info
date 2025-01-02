import { useEffect, useState } from 'react';
import { toAnimeInfo } from '@/utils/functions';
import { Anime } from '@/utils/globalTypes';
import AnimesSection from '@/components/AnimesSection';
import RefreshIcon from '@/components/Icons/RefreshIcon';
import Genres from '@/components/Genres';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import api from '@/utils/api';
import '@/styles/PagesStyleBase.css';

const HomePage = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wantRefresh, setWantRefresh] = useState(false);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      api.getRandomAnime().then((res) => {
        console.log(res.data.type);
        setAnimes((prevAnimes) => [...prevAnimes, toAnimeInfo(res.data)]);
        setIsLoading(false);
      });
    }
  }, [wantRefresh]);

  const refresh = () => {
    setAnimes([]);
    setIsLoading(true);
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
            animes={animes}
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
    </div>
  );
};

export default HomePage;
