import { useEffect, useState } from 'react';
import api from '@/utils/api';
import AnimesHeader from '../AnimesHeader';
import GenresBox from '../GenresBox';
import './Genres.css';

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.getAnimesGenres().then((data) => setGenres(data.data));
  }, []);

  if (!genres.length) return null;

  const midIndex = Math.ceil(genres.length / 2);

  return (
    <div className="genrethemes-box">
      <AnimesHeader title="Genre & Themes" />
      <div className="genrethemes-box-content">
        <GenresBox genres={genres.slice(0, midIndex)} />
        <GenresBox genres={genres.slice(midIndex)} />
      </div>
    </div>
  );
};

export default Genres;
