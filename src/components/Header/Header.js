import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import SearchBox from '../Search/search-box-container';
import Menu from '../Account/Menu/account-menu';

export default () => (
  <header className="site-header">
    <h2>
      <Link to="/">My IMDB.se</Link>
    </h2>
    <div className="container">
      <div className="row ">
        <div className="col-lg-11 col-md-2">
          <SearchBox placeholder="Which movie do you like to see?" />
        </div>
        <div className="col-lg-1 col-md-2">
          <Menu />
        </div>
      </div>
    </div>
  </header>
);
