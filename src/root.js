import React from 'react';
import AppContainer from './components/App/app-container';
import ErrorBoundary from './error-boundary';

const Root = () => (
  <ErrorBoundary>
    <AppContainer />
  </ErrorBoundary>
);

export default Root;
