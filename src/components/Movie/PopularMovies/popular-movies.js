import React from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/movies';
import { getPopularMovies } from '../state/movie-actions';

class PopularMovies extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPopularMovies());
  }

  render() {
    const { movies, loading, page, dispatch } = this.props;
    return (
      <Movies
        movies={movies}
        loading={loading}
        title="Popular movies"
        onLoadMore={() => {
          dispatch(getPopularMovies(page + 1));
        }}
        paging
      />
    );
  }
}
const mapStatetoProps = state => {
  const { list, loading, page } = state.popularesMovies;
  return {
    movies: [...list],
    loading,
    page
  };
};
export default connect(mapStatetoProps)(PopularMovies);
