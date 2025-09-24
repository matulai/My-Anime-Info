import { useAnimeGenreByPage } from '@/hooks/useAnimeGenreByPage';
import AnimesSection from '@/components/AnimesSection';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Genres from '@/components/Genres';
import Title from '@/components/Title';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const GenrePage = () => {
  const {
    isLoading,
    animesAPI,
    modalMessage,
    genreNumber,
    genreName,
    setModalMessage,
  } = useAnimeGenreByPage();

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Title />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesSection
            title={genreName}
            animes={animesAPI.data}
            isLoading={isLoading}
            children={
              <Pagination
                url={`/genre/${genreNumber}/${genreName}`}
                pagination={animesAPI.pagination}
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

export default GenrePage;
