import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import AnimesByGenre from '@/components/AnimesByGenre';
import Genres from '@/components/Genres';
import { useParams } from 'react-router-dom';
import '@/styles/PagesStyleBase.css';

const GenrePage = () => {
  const params = useParams();

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesByGenre
            number={params.genreNumber}
            genre={params.genreName}
            page={params.page}
          />
          <Genres />
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
