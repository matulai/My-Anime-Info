import { Link } from 'react-router-dom';
import './GenresBox.css';

const GenresBox = ({ genres }) => {
  return (
    <ul className="genres-box-container">
      {genres.map((genre) => (
        <li key={genre.mal_id} className="genres-box-container-item">
          <Link
            to={`/genre/${genre.mal_id}/${genre.name}/1`}
            className="genres-box-container-item-link"
          >
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenresBox;
