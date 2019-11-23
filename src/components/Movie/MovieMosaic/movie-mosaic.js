import React from 'react';
import './movie-mosaic.scss';

export default ({ title, description, imgUrl }) => (
  <div className="movie-mosaic">
    <img src={imgUrl} alt={title} />
    <footer>
      <strong>{title}</strong>
      <div>
        <span>{description}</span>
      </div>
    </footer>
  </div>
);
