type AnimeAPI = {
  mal_id: number;
  title: string;
  images?: {
    webp?: {
      image_url?: string;
    };
  };
  trailer?: {
    embed_url?: string;
  };
  episodes?: number;
  synopsis?: string;
  season?: string;
  year?: number;
  status?: string;
  genres: {
    id: number;
    name: string;
  }[];
};

type Anime = {
  id: number;
  title: string;
  imageUrl?: string;
  trailerEmbedUrl?: string;
  episodes?: number;
  synopsis?: string;
  season?: string;
  year?: number;
  status?: string;
  genres: {
    id: number;
    name: string;
  }[];
};

export type { AnimeAPI, Anime };
