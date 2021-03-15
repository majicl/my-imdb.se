import types from './movie-types';
import { getPopularMovies as getPopularMoviesAPI } from '../../../api/movie';

const { GET_POPULARES } = types;
export const getPopularMovies = (page) => {
  return {
    type: GET_POPULARES,
    payload: getPopularMoviesAPI(page),
  };
};
