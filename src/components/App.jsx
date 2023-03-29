import { lazy } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Layout = lazy(() => import('./Layout'));
const Reviews = lazy(() => import('../components/Reviews'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />

          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
