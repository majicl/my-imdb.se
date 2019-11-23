import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { collectReducers } from '../reducers/resolver';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers(collectReducers()),
    composeEnhancers(applyMiddleware(thunk, promiseMiddleware))
  );
};
