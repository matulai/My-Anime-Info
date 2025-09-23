import { useGetAnimesGenres } from '@/utils/api';
import { useState } from 'react';
import AnimesSectionHeader from '@/components/AnimesSectionHeader';
import GenresBox from '@/components/GenresBox';
import Modal from '@/components/Modal';
import './Genres.css';

const Genres = () => {
  const [modalMessage, setModalMessage] = useState('');
  const { data, error, isPending } = useGetAnimesGenres();

  if (error) {
    setModalMessage(error.message);
  }

  return (
    <>
      <div className="genrethemes-box">
        <AnimesSectionHeader title="Genre & Themes" />
        <GenresBox isLoading={isPending} genres={data?.data.data} />
      </div>
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </>
  );
};

export default Genres;
