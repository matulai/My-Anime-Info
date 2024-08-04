/// <reference types="vite/client" />

declare global {
  type AnimeInfo = {
    readonly id: number;
    title: string;
    imageUrl: string;
    trailerUrl: string;
    episodes: number;
    synopsis: string;
    season: string;
    year: number;
    genres: string[];
    explicit_genres: string[];
    themes: string[];
  };

  type AnimeArrProp = {
    animeArr: AnimeInfo[];
    isLoading: boolean;
  };
}

export {};
