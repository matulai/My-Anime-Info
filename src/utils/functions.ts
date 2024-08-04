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

// const randomAnimes = () => {
//   const animes: AnimeInfo[] = [];

//   Promise.all(getAnimesPromises()).then((res) => {
//     res.forEach((anime) => {
//       animes.push(toAnimeInfo(anime.data));
//     });
//   });

//   return animes;
// };

// async function getAnimesPromises() {
//   const promises = [];

//   for (let i = 0; i < 4; i++) {
//     // Agregar la promesa al arreglo sin esperar a que se resuelva
//     promises.push(api.getRandomAnimeAsync());
//   }

//   return promises;
// }

export { toAnimeInfo };
