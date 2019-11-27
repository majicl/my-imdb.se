import React from 'react';
import { Link } from 'react-router-dom';
import './movie-mosaic.scss';

export default React.memo(
  ({
    title,
    overview,
    poster_path,
    imageBaseUrl,
    id,
    isFav,
    toggleFav,
    toggleList,
    isInMyList
  }) => (
    <Link to={`/movies/m-${id}/${title}`}>
      <div className="movie-mosaic">
        <img src={`${imageBaseUrl}/w300${poster_path}`} alt={title} />
        <div
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            toggleFav(id);
          }}
          aria-labelledby=""
          role="img"
          className="fav"
        >
          {!isFav ? (
            <span
              role="img"
              title="Add to your favorite list"
              aria-labelledby=""
            >
              🤍
            </span>
          ) : (
            <span
              role="img"
              title="remove from your favorite list"
              aria-labelledby=""
            >
              ❤️
            </span>
          )}
        </div>
        <div
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            toggleList(id);
          }}
          aria-labelledby=""
          role="img"
          className="list"
        >
          {!isInMyList ? (
            <div role="img" title="Add to your list" aria-labelledby="">
              +
            </div>
          ) : (
            <div
              role="img"
              className="rm"
              title="remove from your list"
              aria-labelledby=""
            >
              -
            </div>
          )}
        </div>
        <footer>
          <strong>{title}</strong>
          <div>
            <p className="overview">{overview}</p>
          </div>
        </footer>
      </div>
    </Link>
  ),
  (prevProps, nextProps) =>
    !(
      prevProps.id !== nextProps.id ||
      prevProps.isFav !== nextProps.isFav ||
      prevProps.isInMyList !== nextProps.isInMyList
    )
);
