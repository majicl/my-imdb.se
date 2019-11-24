import React from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import Layout from './layout';

import ErrorBoundary from './error-boundary';
import configureStore from './store/store';

const Root = () => (
  <Provider store={configureStore()}>
    <ErrorBoundary>
      <Layout>
        <Router />
      </Layout>
    </ErrorBoundary>
  </Provider>
);

export default Root;
