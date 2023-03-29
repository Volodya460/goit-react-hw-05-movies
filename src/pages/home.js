import { fetchTrendingMovies } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useNavigate();

  useEffect(() => {
    fetchTrendingMovies()
      .then(respons => {
        setTrendingMovies(respons.data.results);
      })
      .catch(error => alert(error));
  }, []);

  return (
    <ul>
      {trendingMovies.map(el => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {el.title || el.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Home;
