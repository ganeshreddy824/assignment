// src/api/movieAPI.jsx
import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = '61c79182'; // Remove the space before the API key

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchMovies = async (title) => {
  try {
    const response = await axiosInstance.get(`?s=${title}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};
