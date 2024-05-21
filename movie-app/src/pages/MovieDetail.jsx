// src/pages/MovieDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetailAsync } from '../features/movies/moviesSlice';

function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movies.detail);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovieDetailAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error fetching movie details</p>}
      {status === 'succeeded' && (
        <div>
          <h2>{movieDetail.Title}</h2>
          <p>Year: {movieDetail.Year}</p>
          <p>Genre: {movieDetail.Genre}</p>
          <p>Director: {movieDetail.Director}</p>
          <p>Plot: {movieDetail.Plot}</p>
          <img src={movieDetail.Poster} alt={movieDetail.Title} />
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
