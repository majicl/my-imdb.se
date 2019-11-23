import React from 'react';
import './movie-mosaic.scss';

export default ({ title, overview, poster_path, imageBaseUrl }) => (
  <div className="movie-mosaic">
    <img src={`${imageBaseUrl}/w300${poster_path}`} alt={title} />
    <footer>
      <strong>{title}</strong>
      <div>
        <p className="overview">{overview}</p>
      </div>
    </footer>
  </div>
);
