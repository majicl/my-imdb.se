import React from 'react';
import './movies.scss';
import config from '../../../../config/movie-provider';

import MovieMosaic from '../MovieMosaic/movie-mosaic';
import Loading from '../../shared/Loading/loading';

export default ({
  movies = [],
  title,
  loading,
  paging,
  onLoadMore,
  favorites = [],
  watchLater = [],
  toggleFav,
  toggleList,
  actionButtonAvailable = false
}) => {
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
              key={title + _movie.id}
              className="col-lg-3 col-md-3 col-sm-4 movie-container"
            >
              <MovieMosaic
                movie={_movie}
                imageBaseUrl={config.imagesBaseUrl}
                favorites={favorites}
                watchLater={watchLater}
                isFav={favorites.some(_ => _.id === _movie.id)}
                isInMyList={watchLater.some(_ => _.id === _movie.id)}
                toggleFav={toggleFav}
                toggleList={toggleList}
                actionButtonAvailable={actionButtonAvailable}
              />
            </div>
          ))}
        {!loading && movies.length === 0 && (
          <div className="no-item">There is no movie to display!</div>
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
