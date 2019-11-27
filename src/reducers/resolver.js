import popularesMovies from '../components/Movie/state/movie-reducers';
import search from '../components/Search/state/search-reducers';
import account from '../components/Account/state/account-reducers';

export const collectReducers = () => {
  return {
    popularesMovies,
    search,
    account
  };
};
