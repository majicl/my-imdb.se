import { handleActions } from '../../../utils';
import types from './movie-types';

const { GET_POPULARES } = types;

// initiate stete of popular
const INITIAL_STATE = {
  list: [],
  loading: false
};

// reducer for popular movie actions
const reducers = {
  [GET_POPULARES]: {
    PENDING: state => {
      return { ...state, loading: true, error: undefined };
    },
    FULFILLED: (state, action) => {
      return { ...state, list: action.payload.results, loading: false };
    },
    REJECTED: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    }
  }
};

export default handleActions(INITIAL_STATE, reducers);
