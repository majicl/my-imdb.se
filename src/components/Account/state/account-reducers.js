import { handleActions } from '../../../utils';
import types from './account-types';

const { TOGGLE_FAVORITES, TOGGLE_MY_LIST } = types;

const INITIAL_STATE = {
  favorites: [],
  watchLater: [],
  displayName: 'Majid',
  authencticated: true,
};

const reducers = {
  [TOGGLE_FAVORITES]: (state, action) => {
    return { ...state, favorites: action.favorites };
  },
  [TOGGLE_MY_LIST]: (state, action) => {
    return { ...state, watchLater: action.watchLater };
  },
};

export default handleActions(INITIAL_STATE, reducers);
