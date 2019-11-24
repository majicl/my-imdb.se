import { handleActions } from '../../../utils';
import types from './search-types';

const { SEARCH } = types;

const INITIAL_STATE = {
  loading: false,
  results: []
};

const reducers = {
  [SEARCH]: {
    PENDING: state => {
      return {
        ...state,
        loading: true,
        error: undefined
      };
    },
    FULFILLED: (state, action) => {
      return { ...state, results: action.payload.results, loading: false };
    },
    REJECTED: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    }
  }
};

export default handleActions(INITIAL_STATE, reducers);
