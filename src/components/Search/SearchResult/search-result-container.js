import React from 'react';
import { connect } from 'react-redux';
import Movies from '../../Movie/Movies/movies';
import { search } from '../state/search-actions';

class SearchResult extends React.Component {
  componentDidMount() {
    this.searchMovies();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.searchMovies();
    }
  }

  searchMovies() {
    this.props.dispatch(search(this.props.match.params.query));
  }

  render() {
    const { movies, loading } = this.props;
    return (
      <Movies
        movies={movies}
        loading={loading}
        title={`Search Result (${this.props.match.params.query})`}
      />
    );
  }
}
const mapStatetoProps = state => {
  const { results, loading } = state.search;
  return {
    movies: [...results],
    loading
  };
};
export default connect(mapStatetoProps)(SearchResult);
