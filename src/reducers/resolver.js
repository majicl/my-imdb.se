import popularesMovies from '../components/Movie/state/movie-reducers';
import search from '../components/Search/state/search-reducers';

export const collectReducers = () => {
  return {
    popularesMovies,
    search
  };
};
