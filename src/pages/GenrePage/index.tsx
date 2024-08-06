import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import AnimesByGenre from '@/components/AnimesByGenre';
import Genres from '@/components/Genres';
import { useParams } from 'react-router-dom';
import './GenrePage.css';

const GenrePage = () => {
  const params = useParams();

  return (
    <div className="genrepage-container">
      <div className="genrepage-container-content">
        <Header />
        <Navbar />
        <div className="genrepage-container-content-animesection">
          <AnimesByGenre number={params.genreNumber} genre={params.genreName} />
          <Genres />
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
