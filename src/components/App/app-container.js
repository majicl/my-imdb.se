import React from 'react';
import './app.scss';
import Header from '../Header/Header';
import PopularMovies from '../Movie/PopularMovies/popular-movies';
import HighestRatedMovies from '../Movie/HighestRatedMovies/highest-rated-movies';
import Splitter from '../shared/Splitter/Splitter';

export default () => {
  return (
    <div>
      <Header />
      <PopularMovies />
      <Splitter />
      <HighestRatedMovies />
    </div>
  );
};
