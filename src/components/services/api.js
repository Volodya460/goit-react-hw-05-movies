import axios from 'axios';

const KEY = '9391d9eb657d7ce69073c80004150e40';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function fetchTrendingMovies() {
  return axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
}

export async function fetchMovieDetails(movieId) {
  const response = axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );

  return response;
}

export function fetchMovieCast(movieId) {
  return axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&`
  );
}

export async function fetchMovieSearch(value) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${value}`
  );

  return response.data.results;
  // return axios.get(
  //   `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${value}`
  // );
}
