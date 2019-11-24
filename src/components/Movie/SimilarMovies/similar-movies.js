import React from 'react';
import './similar-movies.scss';
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
    if (this.props.movie !== prevProps.movie) {
      await this.updateMovies();
    }
  }

  async updateMovies() {
    if (this.props.movie.id) {
      this.setState({ loading: true });
      const json = await getSimilarMovies(this.props.movie.id);
      this.setState({ movies: json.results, loading: false });
    }
  }

  render() {
    const { movies, loading } = this.state;
    return <Movies movies={movies} loading={loading} title="Similar Movies" />;
  }
}
