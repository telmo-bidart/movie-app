import { useState, useEffect } from 'react';
import { Movie } from './movie';
import '../index.css';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=942277627f5c059768e1e4eda4c49345&page=1';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=942277627f5c059768e1e4eda4c49345&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <a className='home' href='/' class='btn btn-lg btn-success'>
          Home
        </a>
        <form onSubmit={handleOnSubmit}>
          <input
            className='search'
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
