import React from 'react';
import MovieMosaic from './MovieMosaic/movie-mosaic';

export default class Movies extends React.Component {
  componentDidMount() {}
  render() {
    const { movies = [] } = this.props;

    return (
      <div className="row">
        {movies.map((_movie, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4">
            <MovieMosaic />
          </div>
        ))}
      </div>
    );
  }
}
