import React from 'react';
import './movies.scss';
import config from '../../../../config/movie-provider';

import MovieMosaic from '../MovieMosaic/movie-mosaic';
import Loading from '../../shared/Loading/loading';

export default ({ movies = [], title, loading, paging, onLoadMore }) => {
  return (
    <section className="container movies-container">
      <div className="category-title">
        <h2>{title}</h2>
      </div>
      <div className="row">
        {loading && <Loading />}
        {!loading &&
          movies.map(_movie => (
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
      {paging && (
        <div className="more-container">
          <button type="button" onClick={onLoadMore}>
            More
          </button>
        </div>
      )}
    </section>
  );
};
