import axios from 'axios';

const API_ANIME_URL = 'https://api.jikan.moe/v4';

const getRandomAnime = () =>
  axios.get(`${API_ANIME_URL}/random/anime`).then((response) => response.data);

const getAnimeByName = (name: string) =>
  axios
    .get(`${API_ANIME_URL}/anime?q=${name}`)
    .then((response) => response.data);

const getAnimesGenres = () =>
  axios.get(`${API_ANIME_URL}/genres/anime`).then((response) => response.data);

const getAnimesByGenre = (number: number) =>
  axios
    .get(`${API_ANIME_URL}/anime?genres=${number}`)
    .then((response) => response.data);

const getAnimesByGenreOnPage = (number: string, page: string) =>
  axios
    .get(`${API_ANIME_URL}/anime?genres=${number}&page=${page}`)
    .then((response) => response.data);

const getWeeklySchedule = (day: string) =>
  axios
    .get(`${API_ANIME_URL}/schedules/${day}`)
    .then((response) => response.data);

const getSeasonalAnimes = (year: string, season: string) =>
  axios
    .get(`${API_ANIME_URL}/seasons/${year}/${season}`)
    .then((response) => response.data);

const getSeasons = () =>
  axios.get(`${API_ANIME_URL}/seasons`).then((response) => response.data);

const getActualSeason = () =>
  axios.get(`${API_ANIME_URL}/seasons/now`).then((response) => response.data);

export default {
  getAnimesByGenreOnPage,
  getWeeklySchedule,
  getSeasonalAnimes,
  getAnimesByGenre,
  getAnimesGenres,
  getActualSeason,
  getAnimeByName,
  getRandomAnime,
  getSeasons,
};
