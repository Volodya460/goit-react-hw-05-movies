import { fetchMovieSearch } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
} from './movies.styled';

const Movies = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === '') {
      alert('Right something');
    }
    const form = e.target;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (filmName === null) return;

    fetchMovieSearch(filmName)
      .then(results => {
        setData(results.data.results);
      })
      .catch(err => console.log(err));
  }, [filmName]);

  return (
    <>
      {' '}
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          name="query"
          color="secondary"
          id="outlined-basic"
          label="Search Film"
          variant="outlined"
        ></SearchFormInput>
        <SearchFormButton
          type="submit"
          variant="outlined"
          size="medium"
          sx={{ ml: 2 }}
        >
          <SearchFormButtonSpan>Search</SearchFormButtonSpan>
        </SearchFormButton>
      </SearchForm>
      {data && (
        <ul>
          {data.map(el => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} state={{ from: location }}>
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
