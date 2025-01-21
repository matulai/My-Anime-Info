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
    <div className="anime-info-container">
      <AnimeSectionHeader title={'Anime Info'} />
      <div className="anime-info-content">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="anime-info-content-wishlist-image">
              <img
                className="anime-info-content-anime-image"
                src={anime.imageUrl}
                alt={anime.title}
              />
              <button className="button-rectangle color-yellow">
                Add to Wishlist
              </button>
            </div>
            <div className="anime-info-content-info">
              <h2 style={{ textAlign: 'center' }}>{anime.title}</h2>
              <p>
                <span className="subtitles">Synopsis:</span>
                <br />
                {anime.synopsis}
              </p>
              <div className="anime-info-content-info-subinfo">
                <div>
                  <p>
                    <span className="subtitles">Genres:</span>
                    {anime.genres.map((genre) => genre.name).join(', ')}
                  </p>
                  <p>
                    <span className="subtitles">Episodes:</span>{' '}
                    {anime.episodes}
                  </p>
                  <p>
                    <span className="subtitles">Status:</span> {anime.status}
                  </p>
                  <p>
                    <span className="subtitles">Season:</span> {anime.season}
                  </p>
                  <p>
                    <span className="subtitles">Year:</span> {anime.year}
                  </p>
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
