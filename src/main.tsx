import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
  },
  {
    path: '/seasons',
    element: <SeasonPage />,
  },
  {
    path: 'animeInfo/:animeName/:animeId',
    element: <AnimePage />,
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error('Root element not found');
}
