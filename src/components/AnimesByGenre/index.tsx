import './AnimesByGenre.css';
import AnimesBox from '@/components/AnimesBox';
import { animesToAnimeInfo } from '@/utils/functions.js';
import { useEffect, useState } from 'react';
import NavPagination from '@/components/NavPagination';
import api from '@/utils/api.js';
import AnimeSectionHeader from '@/components/AnimeSectionHeader';

const AnimesByGenre = ({ genre, number, page }) => {
  const [animesAPI, setAnimesAPI] = useState({
    data: [],
    pagination: { last_visible_page: 0, has_next_page: false, current_page: 0 },
  });
  const [isLoading, setIsLoading] = useState(true);

  // Ver si se puede hacer un custom hook para esto
  // Ver si se puede mejorar en un futuro.
  useEffect(() => {
    api
      .getAnimesByGenreOnPage(number, page)
      .then((res) => {
        setAnimesAPI(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [number, page]);

  return (
    <div className="animesbygenre-container">
      <AnimeSectionHeader
        title={genre}
        children={
          <NavPagination
            genreName={genre}
            genreNumber={number}
            pagination={animesAPI.pagination}
          />
        }
      />
      <AnimesBox
        animeArr={animesToAnimeInfo(animesAPI.data)}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AnimesByGenre;
