import React from 'react';
import { Link } from 'react-router-dom';
import './movie-mosaic.scss';

export default ({ title, overview, poster_path, imageBaseUrl, id }) => (
  <Link to={`/movies/m-${id}/${title}`}>
    <div className="movie-mosaic">
      <img src={`${imageBaseUrl}/w300${poster_path}`} alt={title} />
      <footer>
        <strong>{title}</strong>
        <div>
          <p className="overview">{overview}</p>
        </div>
      </footer>
    </div>
  </Link>
);
