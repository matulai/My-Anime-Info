import { Link } from 'react-router-dom';
import './GenresBox.css';

const GenresBox = ({ genres }) => {
  return (
    <div className="genres-box-container">
      {genres.map((genre) => (
        <Link
          key={genre.mal_id}
          to={`/genre/${genre.mal_id}/${genre.name}`}
          className="genres-box-container-item-link"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenresBox;
