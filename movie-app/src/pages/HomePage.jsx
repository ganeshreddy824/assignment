// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync } from '../features/movies/moviesSlice';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMoviesAsync(searchTerm));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <p>{movie.Title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
