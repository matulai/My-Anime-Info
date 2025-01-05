import { useEffect, useState } from 'react';
import AnimesSectionHeader from '@/components/AnimesSectionHeader';
import GenresBox from '@/components/GenresBox';
import Modal from '@/components/Modal';
import api from '@/utils/api';
import './Genres.css';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    api
      .getAnimesGenres()
      .then((data) => setGenres(data.data))
      .catch((err) => setModalMessage(err.message));
  }, []);

  return (
    <>
      <div className="genrethemes-box">
        <AnimesSectionHeader title="Genre & Themes" />
        <GenresBox genres={genres} />
      </div>
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </>
  );
};

export default Genres;
