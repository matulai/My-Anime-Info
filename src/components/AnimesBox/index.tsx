import Spinner from '../Spinner';
import './AnimesBox.css';

const AnimesBox: React.FC<AnimeArrProp> = ({ animeArr, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="animesbox-container">
      {animeArr.map((anime) => (
        <div className="animesbox-container-anime" key={anime.id}>
          <img
            className="animesbox-container-anime-image"
            src={anime.imageUrl}
            alt={anime.title}
          />
          <div className="animesbox-container-anime-title">{anime.title}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimesBox;
