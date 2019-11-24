import React from 'react';
import MovieMosaic from './MovieMosaic/movie-mosaic';
import config from '../../../config/movie-provider';
import './movies.scss';

export default class Movies extends React.Component {
  componentDidMount() {}
  render() {
    const { movies = [], title, loading } = this.props;

    return (
      <section className="container movies-container">
        <div className="category-title">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {movies.map(_movie => (
            <div
              key={_movie.id}
              className="col-lg-3 col-md-3 col-sm-4 movie-container"
            >
              <MovieMosaic {..._movie} imageBaseUrl={config.imagesBaseUrl} />
            </div>
          ))}
          {!loading && movies.length === 0 && (
            <div className="no-item">There is no movies to display!</div>
          )}
        </div>
      </section>
    );
  }
}
