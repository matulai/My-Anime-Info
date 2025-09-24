import { useAnimeById } from '@/hooks/useAnimeById';
import AnimeInfo from '@/components/AnimeInfo';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const AnimePage = () => {
  const { isLoading, modalMessage, anime, setModalMessage } = useAnimeById();

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Title />
        <Navbar />
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
