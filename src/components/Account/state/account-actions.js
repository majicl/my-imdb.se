import types from './account-types';

const { TOGGLE_FAVORITES, TOGGLE_MY_LIST } = types;

export const toggleFavorites = movieId => {
  return (dispatch, getState) => {
    const currentList = getState().account.favorites;
    let newList;
    if (currentList.includes(movieId)) {
      newList = currentList.filter(_ => _ !== movieId);
    } else {
      newList = [...currentList, movieId];
    }
    return dispatch({
      type: TOGGLE_FAVORITES,
      favorites: newList
    });
  };
};

export const toggleMyList = movieId => {
  return (dispatch, getState) => {
    const currentList = getState().account.watchLater;
    let newList;
    if (currentList.includes(movieId)) {
      newList = currentList.filter(_ => _ !== movieId);
    } else {
      newList = [...currentList, movieId];
    }
    return dispatch({
      type: TOGGLE_MY_LIST,
      watchLater: newList
    });
  };
};
