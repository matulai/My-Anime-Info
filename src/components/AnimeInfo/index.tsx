import { Anime } from '@/utils/globalTypes';
import AnimeSectionHeader from '@/components/AnimesSectionHeader';
import Spinner from '@/components/Spinner';
import './AnimeInfo.css';

type AnimeInfoProps = {
  anime: Anime;
  isLoading: boolean;
};

const AnimeInfo = ({ anime, isLoading }: AnimeInfoProps) => {
  return (
    <div className="animes-section-container">
      <AnimeSectionHeader title={'Anime Info'} />
      <div className="animes-section-content">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="animes-section-content-image-wishlist">
              <img
                className="animesbox-container-anime-image"
                src={anime.imageUrl}
                alt={anime.title}
              />
            </div>
            <div className="animes-section-content-info">
              <h2>{anime.title}</h2>
              <p>{anime.synopsis}</p>
              <div className="animes-section-content-info-subinfo">
                <div>
                  <p>
                    Genres: {anime.genres.map((genre) => genre.name).join(', ')}
                  </p>
                  <p>Episodes: {anime.episodes}</p>
                  <p>Status: {anime.status}</p>
                  <p>Season: {anime.season}</p>
                  <p>Year: {anime.year}</p>
                </div>
                <iframe
                  title={anime.title}
                  src={anime.trailerEmbedUrl}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnimeInfo;
