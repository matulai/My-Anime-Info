import { useAnimeById } from '@/hooks/useAnimeById';
import AnimeInfo from '@/components/AnimeInfo';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const AnimePage = () => {
  const { isLoading, modalMessage, anime, setModalMessage } = useAnimeById();

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <div className="page-container-content-animesection">
          <AnimeInfo anime={anime} isLoading={isLoading} />
        </div>
      </div>
      <Footer isLoading={isLoading} />
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default AnimePage;
