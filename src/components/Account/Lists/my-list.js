import React from 'react';
import { connect } from 'react-redux';
import Movies from '../../Movie/Movies/movies';
import Header from '../../Header/Header';

const MyWatchLater = ({ watchLater }) => {
  return (
    <React.Fragment>
      <Header />
      <Movies movies={watchLater} loading={false} title="My Watch Later List" />
    </React.Fragment>
  );
};

const mapStatetoProps = state => {
  const { watchLater } = state.account;
  return {
    watchLater
  };
};
export default connect(mapStatetoProps)(MyWatchLater);
