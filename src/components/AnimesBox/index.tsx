import { Anime } from '@/utils/globalTypes';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import './AnimesBox.css';

type AnimeArrProp = {
  animeArr: Anime[];
  isLoading: boolean;
};

const AnimesBox = ({ animeArr, isLoading }: AnimeArrProp) => {
  return (
    <div className="animesbox-container">
      {isLoading ? (
        <Spinner />
      ) : (
        animeArr.map((anime, index) => (
          <div className="animesbox-container-anime" key={index}>
            <Link
              to={`/animeInfo/${anime.id}`}
              className="animesbox-container-anime-image"
            >
              <img
                className="animesbox-container-anime-image"
                src={anime.imageUrl}
                alt={anime.title}
              />
            </Link>
            <Link
              className="animesbox-container-anime-title"
              to={`/animeInfo/${anime.id}`}
            >
              {anime.title}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default AnimesBox;
