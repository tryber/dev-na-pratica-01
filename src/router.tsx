import { createBrowserRouter } from 'react-router-dom';
import { HighlightsHistory, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'highlights/history',
    element: <HighlightsHistory />,
  },
]);

export default router;
