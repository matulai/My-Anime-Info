import axios from 'axios';

const API_ANIME_URL = 'https://api.jikan.moe/v4';

// faltan catchs y manejo de errores

const getRandomAnime = () =>
  axios.get(`${API_ANIME_URL}/random/anime`).then((response) => response.data);

const getAnimeByName = (name) =>
  axios
    .get(`${API_ANIME_URL}/anime?q=${name}`)
    .then((response) => response.data);

const getAnimesGenres = () =>
  axios.get(`${API_ANIME_URL}/genres/anime`).then((response) => response.data);

const getAnimesByGenre = (number) =>
  axios
    .get(`${API_ANIME_URL}/anime?genres=${number}`)
    .then((response) => response.data);

const getNextPageAnimeGenre = (number, page) =>
  axios
    .get(`${API_ANIME_URL}/anime?genres=${number}&page=${page}`)
    .then((response) => response.data);

export default {
  getRandomAnime,
  getAnimeByName,
  getAnimesGenres,
  getAnimesByGenre,
  getNextPageAnimeGenre,
};
