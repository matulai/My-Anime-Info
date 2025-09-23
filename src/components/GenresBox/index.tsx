import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import './GenresBox.css';

interface GenresBoxInterface {
  genres?: Genre[];
  isLoading: boolean;
}

interface Genre {
  name: string;
  mal_id: string;
}

const GenresBox = ({ genres, isLoading }: GenresBoxInterface) => {
  return (
    <ul className="genres-box-container">
      {isLoading || genres == undefined ? (
        <Spinner />
      ) : (
        genres.map((genre) => (
          <li key={genre.mal_id} className="genres-box-container-item">
            <Link
              to={`/genre/${genre.mal_id}/${genre.name}/1`}
              className="genres-box-container-item-link"
            >
              {genre.name}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default GenresBox;
