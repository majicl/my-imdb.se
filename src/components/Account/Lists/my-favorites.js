import React from 'react';
import { connect } from 'react-redux';
import Movies from '../../Movie/Movies/movies';
import Header from '../../Header/Header';

const MyFavorites = ({ favorites }) => {
  return (
    <React.Fragment>
      <Header />
      <Movies movies={favorites} loading={false} title="My Favourites Movies" />
    </React.Fragment>
  );
};

const mapStatetoProps = state => {
  const { favorites } = state.account;
  return {
    favorites
  };
};
export default connect(mapStatetoProps)(MyFavorites);
