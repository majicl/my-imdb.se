import React from 'react';
import { getHighestRatedMovies } from '../../../api/movie';
import Movies from '../Movies/movies';

export default class HighestRatedMovies extends React.Component {
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

  async updateMovies() {
    this.setState({ loading: true });
    const json = await getHighestRatedMovies();
    this.setState({ movies: json.results, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <Movies movies={movies} loading={loading} title="Highest Rated Movies" />
    );
  }
}
