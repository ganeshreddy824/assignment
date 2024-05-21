// src/features/movies/moviesSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetail } from '../../api/movieAPI';

const initialState = {
  list: [],
  detail: null,
  status: 'idle',
  error: null,
};

export const fetchMoviesAsync = createAsyncThunk('movies/fetchMovies', async (title) => {
  const data = await fetchMovies(title);
  return data.Search;
});

export const fetchMovieDetailAsync = createAsyncThunk('movies/fetchMovieDetail', async (id) => {
  const data = await fetchMovieDetail(id);
  return data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMoviesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetailAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetailAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.detail = action.payload;
      })
      .addCase(fetchMovieDetailAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
