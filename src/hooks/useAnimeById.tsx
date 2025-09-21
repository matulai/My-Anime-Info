import { useState, useEffect } from 'react';
import { toAnimeInfo } from '@/utils/functions';
import { useParams } from 'react-router-dom';
import { Anime } from '@/utils/globalTypes';
import api from '@/utils/api';

export function useAnimeById() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  const [anime, setAnime] = useState<Anime>({
    id: 0,
    title: '',
    imageUrl: '',
    synopsis: '',
    genres: [],
    episodes: 0,
    status: '',
    season: '',
    year: 0,
    trailerEmbedUrl: '',
  });

  useEffect(() => {
    api
      .getAnimeById(Number(params.animeId))
      .then((res) => {
        setAnime(toAnimeInfo(res.data));
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.animeId]);

  return { isLoading, modalMessage, anime, setModalMessage };
}
