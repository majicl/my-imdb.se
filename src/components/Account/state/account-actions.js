import types from './account-types';

const { TOGGLE_FAVORITES, TOGGLE_MY_LIST } = types;

export const toggleFavorites = (movie) => (dispatch, getState) => {
  const currentList = getState().account.favorites;
  let newList;
  if (currentList.some((_) => _.id === movie.id)) {
    newList = currentList.filter((_) => _.id !== movie.id);
  } else {
    newList = [...currentList, movie];
  }
  return dispatch({
    type: TOGGLE_FAVORITES,
    favorites: newList,
  });
};

export const toggleMyList = (movieId) => (dispatch, getState) => {
  const currentList = getState().account.watchLater;
  let newList;
  if (currentList.includes(movieId)) {
    newList = currentList.filter((_) => _ !== movieId);
  } else {
    newList = [...currentList, movieId];
  }
  return dispatch({
    type: TOGGLE_MY_LIST,
    watchLater: newList,
  });
};

export const actionCreator = {
  toggleMyList,
  toggleFavorites,
};
