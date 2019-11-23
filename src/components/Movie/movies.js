import React from 'react';
import MovieMosaic from './MovieMosaic/movie-mosaic';
import './movies.scss';

export default class Movies extends React.Component {
  componentDidMount() {}
  render() {
    const { movies = [] } = this.props;

    return (
      <section className="container movies-container">
        <div className="row">
          {movies.map((_movie, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 movie-container"
            >
              <MovieMosaic movie={_movie} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
