import types from './search-types';
import { searchMovies } from '../../../api/movie';

const { SEARCH } = types;
export const search = query => {
  return {
    type: SEARCH,
    payload: searchMovies(query),
    query
  };
};
