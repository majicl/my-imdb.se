import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/app-container';
import MovieDetails from './components/Movie/MovieDetials/movie-details';
import SearchResult from './components/Search/SearchResult/search-result-container';
import MyWatchLaterList from './components/Account/Lists/my-list';
import MyFavorites from './components/Account/Lists/my-favorites';
// router management
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/movies/m-:id/:title" component={MovieDetails} />
      <Route path="/movies/search/:query?" component={SearchResult} />

      {/* Should be protected */}
      <Route path="/account/favorites" exact component={MyFavorites} />
      <Route path="/account/list" exact component={MyWatchLaterList} />
    </Switch>
  </BrowserRouter>
);
