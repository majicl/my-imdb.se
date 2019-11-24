import React from 'react';
import './app.scss';
import Header from '../Header/Header';
import PopularMovies from '../Movie/PopularMovies/popular-movies';
import Splitter from '../shared/Splitter/Splitter';

export default () => {
  return (
    <div>
      <Header />
      <PopularMovies />
      <Splitter />
    </div>
  );
};
