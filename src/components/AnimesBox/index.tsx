import { Anime } from '@/utils/globalTypes';
import AnimeImgFadeIn from '@/components/AnimeImgFadeIn';
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
          <AnimeImgFadeIn key={index} anime={anime} />
        ))
      )}
    </div>
  );
};

export default AnimesBox;
