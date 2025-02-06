import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RandomAnimePage from '@/pages/RandomAnimePage';
import NotFoundPage from '@/pages/NotFoundPage';
import TopAnimePage from '@/pages/TopAnimePage';
import SeasonPage from '@/pages/SeasonPage';
import SearchPage from '@/pages/SearchPage';
import GenrePage from '@/pages/GenrePage';
import AnimePage from '@/pages/AnimePage';
import ReactDOM from 'react-dom/client';
import HomePage from '@/pages/HomePage';
import '@/styles/Colors.css';
import './index.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

const router = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/genre/:genreNumber/:genreName/:page"
        element={<GenrePage />}
      />
      <Route path="/seasons/:year/:season" element={<SeasonPage />} />
      <Route path="/animeInfo/:animeId" element={<AnimePage />} />
      <Route path="/search/:animeName/:page" element={<SearchPage />} />
      <Route path="/top/anime/:page" element={<TopAnimePage />} />
      <Route path="/randomAnimes" element={<RandomAnimePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(router);
} else {
  console.error('Root element not found');
}
