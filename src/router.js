import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/app-container';

// router management
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/movies/m-:id/:title" component={App} />
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>
);
