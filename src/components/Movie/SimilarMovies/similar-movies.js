import React from 'react';
import { getSimilarMovies } from '../../../api/movie';
import Movies from '../Movies/movies';

export default class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }
  async componentDidMount() {
    await this.updateMovies();
  }
  async componentDidUpdate(prevProps) {
    if (this.props.movieId !== prevProps.movieId) {
      await this.updateMovies();
    }
  }

  async updateMovies() {
    if (this.props.movieId) {
      this.setState({ loading: true });
      const json = await getSimilarMovies(this.props.movieId);
      this.setState({ movies: json.results, loading: false });
    }
  }

  render() {
    const { movies, loading } = this.state;
    return <Movies movies={movies} loading={loading} title="Similar Movies" />;
  }
}
