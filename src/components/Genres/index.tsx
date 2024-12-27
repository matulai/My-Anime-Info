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

  return (
    <div className="genrethemes-box">
      <AnimesHeader title="Genre & Themes" />
      <GenresBox genres={genres} />
    </div>
  );
};

export default Genres;
