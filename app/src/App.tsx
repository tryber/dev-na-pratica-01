import React from 'react';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Home from './page/Home';
import './App.css';
import History from './page/History';

function App(): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />} />,
      <Route path="/history" element={<History />} />,
    ]),
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
