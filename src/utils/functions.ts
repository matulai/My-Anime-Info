const toAnimeInfo = (anime) => {
  return {
    id: anime.mal_id,
    title: anime.title,
    imageUrl: anime.images.jpg.image_url,
    trailerUrl: anime.trailer.embed_url,
    episodes: anime.episodes,
    synopsis: anime.synopsis,
    season: anime.premiered,
    year: anime.start_date,
    genres: anime.genres.map((genre) => genre.name),
    explicit_genres: anime.genres.map((genre) => genre.name),
    themes: anime.genres.map((genre) => genre.name),
  };
};

const animesToAnimeInfo = (animes) => {
  return animes.map((anime) => toAnimeInfo(anime));
};

export { toAnimeInfo, animesToAnimeInfo };
