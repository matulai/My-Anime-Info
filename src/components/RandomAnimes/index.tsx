import { useState, useEffect } from 'react';
import { toAnimeInfo } from '@/utils/functions.js';
import RefreshIcon from '@/components/Icons/RefreshIcon';
import AnimesBox from '@/components/AnimesBox';
import api from '@/utils/api.js';
import './RandomAnimes.css';

const RandomAnimes = () => {
  const [animes, setAnimes] = useState([]);
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
    <div className="randomanimes-container">
      <div className="randomanimes-container-header">
        <div className="randomanimes-container-header-text">RANDOM ANIMES</div>
        <button
          className="randomanimes-container-header-button"
          onClick={refresh}
        >
          <RefreshIcon />
        </button>
      </div>
      <AnimesBox animeArr={animes} isLoading={isLoading} />
    </div>
  );
};

export default RandomAnimes;
