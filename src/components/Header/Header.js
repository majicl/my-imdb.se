import React from 'react';
import './header.scss';
import SearchBox from '../Search/search-box';

export default () => (
  <header className="site-header">
    <h2>My IMDB.se</h2>
    <SearchBox placeholder="Which movie do you like to see?" />
  </header>
);
