import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from './services/api';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(reviews => {
        setData(reviews.data.results);
        console.log(reviews.data.results);
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
                <h3>Author:{el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};

export default Reviews;
