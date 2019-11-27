import React from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/movies';
import { getPopularMovies } from '../state/movie-actions';
import {
  toggleFavorites,
  toggleMyList
} from '../../Account/state/account-actions';

class PopularMovies extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPopularMovies());
  }

  render() {
    const {
      movies,
      loading,
      page,
      dispatch,
      favorites,
      watchLater
    } = this.props;
    return (
      <Movies
        movies={movies}
        favorites={favorites}
        watchLater={watchLater}
        loading={loading}
        title="Popular movies"
        onLoadMore={() => {
          dispatch(getPopularMovies(page + 1));
        }}
        toggleFav={movieId => {
          dispatch(toggleFavorites(movieId));
        }}
        toggleList={movieId => {
          dispatch(toggleMyList(movieId));
        }}
        paging
      />
    );
  }
}
const mapStatetoProps = state => {
  const { list, loading, page } = state.popularesMovies;
  const { favorites, watchLater } = state.account;
  return {
    movies: [...list],
    loading,
    page,
    favorites,
    watchLater
  };
};
export default connect(mapStatetoProps)(PopularMovies);
