import React from 'react';
import { Link } from 'react-router-dom';
import './movie-mosaic.scss';

export default React.memo(
  (props) => {
    const {
      isFav,
      toggleFav,
      toggleList,
      isInMyList,
      movie,
      imageBaseUrl,
      actionButtonAvailable,
    } = props;
    const { title, overview, poster_path, id } = movie;
    return (
      <Link to={`/movies/m-${id}/${encodeURI(title)}`}>
        <div className="movie-mosaic">
          <img src={`${imageBaseUrl}/w300${poster_path}`} alt={title} />
          {actionButtonAvailable && (
            <React.Fragment>
              <div
                data-at="favorite-icon"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFav(movie);
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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleList(movie);
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
            </React.Fragment>
          )}

          <footer>
            <strong>{title}</strong>
            <div>
              <p className="overview">{overview}</p>
            </div>
          </footer>
        </div>
      </Link>
    );
  },
  (prevProps, nextProps) =>
    !(
      prevProps.id !== nextProps.id ||
      prevProps.isFav !== nextProps.isFav ||
      prevProps.isInMyList !== nextProps.isInMyList
    )
);
