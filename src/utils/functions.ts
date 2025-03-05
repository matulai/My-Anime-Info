import { AnimeAPI, Anime } from '@/utils/globalTypes.js';

const toAnimeInfo = (anime: AnimeAPI): Anime => {
  return {
    id: anime.mal_id,
    title: anime.title,
    imageUrl: anime.images?.webp?.image_url,
    trailerEmbedUrl: anime.trailer?.embed_url,
    episodes: anime.episodes,
    synopsis: anime.synopsis,
    season: anime.season,
    year: anime.year,
    status: anime.status,
    genres: anime.genres,
  };
};

const animesToAnimeInfo = (animes) => {
  return animes.map((anime) => toAnimeInfo(anime));
};

export { toAnimeInfo, animesToAnimeInfo };
