import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from './services/api';

const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const baseImg =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(response => {
        setData(response.data.cast);
      })
      .catch(error => alert(error.message));
  }, [movieId]);

  return (
    <>
      {data.length !== 0 ? (
        <ul>
          {data.map(el => {
            return (
              <li key={el.id}>
                <img
                  src={el.profile_path ? baseURL + el.profile_path : baseImg}
                  alt="{el.name}"
                  width="120"
                />
                <p>{el.name}</p>
                <p>Character:{el.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry there are no information</p>
      )}
    </>
  );
};

export default Cast;
