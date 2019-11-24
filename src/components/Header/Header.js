import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import SearchBox from '../Search/search-box';

export default () => (
  <header className="site-header">
    <h2>
      <Link to="/">My IMDB.se</Link>
    </h2>
    <SearchBox placeholder="Which movie do you like to see?" />
  </header>
);
