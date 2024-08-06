import './AnimesByGenre.css';
import AnimesBox from '@/components/AnimesBox';
import { animesToAnimeInfo } from '@/utils/functions.js';
import { useEffect, useState } from 'react';
import api from '@/utils/api.js';

const AnimesByGenre = ({ genre, number }) => {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getAnimesByGenre(number).then((res) => {
      setAnimes(animesToAnimeInfo(res.data));
      setIsLoading(false);
    });
  }, [number]);

  return (
    <div className="animesbygenre-container">
      <div className="animesbygenre-container-header">
        <div className="animesbygenre-container-header-text">
          {genre.toUpperCase()}
        </div>
      </div>
      <AnimesBox animeArr={animes} isLoading={isLoading} />
    </div>
  );
};

export default AnimesByGenre;
