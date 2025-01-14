import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SeasonPage from '@/pages/SeasonPage';
import GenrePage from '@/pages/GenrePage';
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
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error('Root element not found');
}
