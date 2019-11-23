import React from 'react';
import './app.scss';
import Header from '../Header/Header';
import Movies from '../Movie/movies';

export default () => (
  <div>
    <Header />
    <Movies movies={[1, 2, 3, 5, 5, 5, 5, 5, 2, 5, 5, 5]} />
  </div>
);
