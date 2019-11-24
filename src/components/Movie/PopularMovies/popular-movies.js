import React from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/movies';
import { getPopularMovies } from '../state/movie-actions';

class PopularMovies extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPopularMovies());
  }

  render() {
    const { movies, loading } = this.props;
    return <Movies movies={movies} loading={loading} title="Popular movies" />;
  }
}
const mapStatetoProps = state => {
  const { list, loading } = state.popularesMovies;
  return {
    movies: [...list],
    loading
  };
};
export default connect(mapStatetoProps)(PopularMovies);
