import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RandomAnimePage from '@/pages/RandomAnimePage';
import NotFoundPage from '@/pages/NotFoundPage';
import SeasonPage from '@/pages/SeasonPage';
import GenrePage from '@/pages/GenrePage';
import AnimePage from '@/pages/AnimePage';
import ReactDOM from 'react-dom/client';
import HomePage from '@/pages/HomePage';
import '@/styles/Colors.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/genre/:genreNumber/:genreName/:page',
    element: <GenrePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/seasons/:year/:season',
    element: <SeasonPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/seasons',
    element: <SeasonPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/animeInfo/:animeId',
    element: <AnimePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/randomAnimes',
    element: <RandomAnimePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error('Root element not found');
}
