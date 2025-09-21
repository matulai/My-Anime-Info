import { useEffect, useState } from 'react';
import { animesToAnimeInfo } from '@/utils/functions';
import { useParams } from 'react-router-dom';
import api from '@/utils/api';

export function useAnimeGenreByPage() {
  const params = useParams();

  const [animesAPI, setAnimesAPI] = useState({
    data: [],
    pagination: { last_visible_page: 0, has_next_page: false, current_page: 0 },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api
      .getAnimesByGenreOnPage(params.genreNumber || '', params.page || '')
      .then((res) => {
        setAnimesAPI({
          data: animesToAnimeInfo(res.data),
          pagination: res.pagination,
        });
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.genreNumber, params.page]);

  return {
    isLoading,
    animesAPI,
    modalMessage,
    genreNumber: params.genreNumber,
    genreName: params.genreName,
    setModalMessage,
  };
}
