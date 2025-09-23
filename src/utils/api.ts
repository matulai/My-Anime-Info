import { useStaticQuery } from '@/hooks/useQueries';
import axios from 'axios';

const API_ANIME_URL = 'https://api.jikan.moe/v4';

const getRandomAnime = () =>
  axios.get(`${API_ANIME_URL}/random/anime`).then((response) => response.data);

const getAnimeByName = (name: string) =>
  axios
    .get(`${API_ANIME_URL}/anime?q=${name}`)
    .then((response) => response.data);

const getAnimeByNameOnPage = (name: string, page: string) =>
  axios
    .get(`${API_ANIME_URL}/anime?q=${name}&page=${page}`)
    .then((response) => response.data);

const getAnimeById = (id: number) =>
  axios.get(`${API_ANIME_URL}/anime/${id}`).then((response) => response.data);

const useGetAnimesGenres = () =>
  useStaticQuery(['genres'], () => axios.get(`${API_ANIME_URL}/genres/anime`));

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

const getTopAnimeByPage = (page: string) =>
  axios
    .get(`${API_ANIME_URL}/top/anime?page=${page}`)
    .then((response) => response.data);

export {
  getAnimesByGenreOnPage,
  getAnimeByNameOnPage,
  getTopAnimeByPage,
  getWeeklySchedule,
  getSeasonalAnimes,
  getAnimesByGenre,
  useGetAnimesGenres,
  getActualSeason,
  getAnimeByName,
  getRandomAnime,
  getAnimeById,
  getSeasons,
};
