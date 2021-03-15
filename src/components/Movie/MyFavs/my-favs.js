import React from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/movies';
import { myFavsPops } from '../state/selector';

const PopularMovies = ({ movies, loading, favorites, watchLater }) => {
  return (
    <Movies
      movies={movies}
      favorites={favorites}
      watchLater={watchLater}
      loading={loading}
      title="My Favorite Popular movies"
    />
  );
};
const mapStatetoProps = (state) => {
  return {
    movies: myFavsPops(state),
  };
};
export default connect(mapStatetoProps)(PopularMovies);
