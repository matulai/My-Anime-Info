import Spinner from '../Spinner';
import './AnimesBox.css';

const AnimesBox: React.FC<AnimeArrProp> = ({ animeArr, isLoading }) => {
  return (
    <div className="animesbox-container">
      {isLoading ? (
        <Spinner />
      ) : (
        animeArr.map((anime) => (
          <div className="animesbox-container-anime" key={anime.id}>
            <img
              className="animesbox-container-anime-image"
              src={anime.imageUrl}
              alt={anime.title}
            />
            <div className="animesbox-container-anime-title">{anime.title}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default AnimesBox;
