import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/app-container';
import MovieDetails from './components/Movie/MovieDetials/movie-details';
import SearchResult from './components/Search/SearchResult/search-result-container';

// router management
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/movies/m-:id/:title" component={MovieDetails} />
      <Route path="/movies/search/:query?" component={SearchResult} />
    </Switch>
  </BrowserRouter>
);
