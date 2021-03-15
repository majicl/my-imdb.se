import { createSelector } from 'reselect';

const favsSelector = (state) => state.account.favorites || [];
const popularesMoviesSelector = (state) => state.popularesMovies.list || [];

export const myFavsPops = createSelector(
  favsSelector,
  popularesMoviesSelector,
  (favs, populares) => {
    const ids = favs.map((_) => _.id);
    return populares.filter((_) => ids.includes(_.id));
  }
);
