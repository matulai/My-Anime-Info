import { useState } from 'react';
import { Anime } from '@/utils/globalTypes';
import { Link } from 'react-router-dom';
import './AnimeImgFadeIn.css';

interface AnimeImgFadeInProps {
  index: number;
  anime: Anime;
}

const AnimeImgFadeIn = ({ index, anime }: AnimeImgFadeInProps) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <div
      className={`animesbox-container-anime ${isLoad ? 'img-loaded' : ''}`}
      key={index}
    >
      <Link
        to={`/animeInfo/${anime.id}`}
        className="animesbox-container-anime-image"
      >
        <img
          className="animesbox-container-anime-image"
          onLoad={() => setIsLoad(true)}
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
  );
};

export default AnimeImgFadeIn;
