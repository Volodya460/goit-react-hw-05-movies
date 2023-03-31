import { fetchMovieDetails } from 'components/services/api';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import NavLInkInf, { Button, NavDiv } from './moviesDetalis.styled';

export default function MoviesDetails() {
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const [movie, setMovie] = useState([]);
  const [completed, setCompleted] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchMovieDetails(movieId)
  //     .then(response => {
  //       setCompleted(true);
  //       setMovie(response.data);
  //     })
  //     .catch(error => {
  //       setCompleted(false);
  //       alert('something wrong');
  //       throw new Error(error.message);
  //     });
  // }, [movieId]);

  useEffect(() => {
    async function getValue() {
      try {
        const arr = await fetchMovieDetails(movieId);

        setCompleted(true);
        setMovie(arr.data);
      } catch (err) {
        setCompleted(false);
        alert('something wrong');
      }
    }
    getValue();
  }, [movieId]);

  // const releaseYear = movie.slice(0, 4);
  // let relise = movie.release_date.slice(0, 4);

  if (completed) {
    return (
      <>
        <Button
          variant="outlined"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </Button>
        {movie && (
          <>
            <div>
              <h1>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h1>
              <img src={baseURL + movie.poster_path} alt="" height="450px" />
              <div>
                <h2>{movie.title}</h2>
                <p>User Score: {Number(movie.vote_average).toFixed(1)}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres.map(el => el.name).join(' ')}</p>
              </div>
            </div>
            <p>Additional information</p>
            <NavDiv>
              <NavLInkInf to="cast" state={location.state}>
                Cast
              </NavLInkInf>
              <NavLInkInf to="reviews" state={location.state}>
                Reviews
              </NavLInkInf>
            </NavDiv>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <Button
          variant="outlined"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </Button>
      </>
    );
  }
}
