import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/app-container';
import MovieDetails from './components/Movie/movie-details';

// router management
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/movies/m-:id/:title" component={MovieDetails} />
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>
);
