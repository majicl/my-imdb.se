import React from 'react';
import './app.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movie/movies';
import Splitter from '../shared/Splitter/Splitter';

export default () => (
  <div>
    <Header />
    <Movies
      movies={[1, 2, 3, 5, 5, 5, 5, 5, 2, 5, 5, 5]}
      title="Upcoming movies"
    />
    <Splitter />
    <Movies
      movies={[1, 2, 3, 5, 5, 5, 5, 5, 2, 5, 5, 5]}
      title="Popular movies"
    />
    <Splitter />
    <Movies
      movies={[1, 2, 3, 5, 5, 5, 5, 5, 2, 5, 5, 5]}
      title="Top rated movies"
    />
    <Footer />
  </div>
);
