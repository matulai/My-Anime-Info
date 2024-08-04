import axios from 'axios';

const API_ANIME_URL = 'https://api.jikan.moe/v4';

// faltan catchs y manejo de errores

const getRandomAnime = () =>
  axios.get(`${API_ANIME_URL}/random/anime`).then((response) => {
    if (['TV', 'OVA', 'Movie'].includes(response.data.data.type)) {
      return response.data;
    } else {
      return getRandomAnime();
    }
  });

// async function getRandomAnimeAsync() {
//   const response = await axios.get(`${API_ANIME_URL}/random/anime`);
//   if (['TV', 'OVA', 'Movie'].includes(response.data.data.type)) {
//     return response.data;
//   } else {
//     return getRandomAnimeAsync();
//   }
// }

const getAnimeByName = (name) =>
  axios
    .get(`${API_ANIME_URL}/anime?q=${name}`)
    .then((response) => response.data);

export default {
  getRandomAnime,
  getAnimeByName,
};
