import { useState, useEffect } from 'react';
import { toAnimeInfo } from '@/utils/functions.js';
import { Anime } from '@/utils/globalTypes.js';
import RefreshIcon from '@/components/Icons/RefreshIcon';
import AnimesBox from '@/components/AnimesBox';
import api from '@/utils/api.js';
import './RandomAnimes.css';
import AnimeSectionHeader from '@/components/AnimeSectionHeader';
import Button from '@/components/Button';

const RandomAnimes = () => {
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
    <div className="randomanimes-container">
      <AnimeSectionHeader
        title="Random Animes"
        children={
          <Button
            children={<RefreshIcon />}
            type={'onlyicon'}
            onClick={refresh}
          />
        }
      />
      <AnimesBox animeArr={animes} isLoading={isLoading} />
    </div>
  );
};

export default RandomAnimes;
