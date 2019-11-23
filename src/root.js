import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './components/App/app-container';
import ErrorBoundary from './error-boundary';
import configureStore from './store/store';

const Root = () => (
  <Provider store={configureStore()}>
    <ErrorBoundary>
      <AppContainer />
    </ErrorBoundary>
  </Provider>
);

export default Root;
