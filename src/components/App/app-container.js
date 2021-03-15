import React from 'react';
import './app.scss';
import Header from '../Header/Header';
import PopularMovies from '../Movie/PopularMovies/popular-movies';
import HighestRatedMovies from '../Movie/HighestRatedMovies/highest-rated-movies';
import Splitter from '../shared/Splitter/Splitter';
import MyFavPop from '../Movie/MyFavs/my-favs';

export default () => {
  return (
    <div>
      <Header />
      <PopularMovies />
      <Splitter />
      <HighestRatedMovies />
      <Splitter />
      <MyFavPop />
    </div>
  );
};
