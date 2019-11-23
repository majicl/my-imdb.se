import React from 'react';
import './search-box.scss';

export default ({ onChange, placeholder }) => {
  return (
    <div className="container search-container">
      <div className="row">
        <input
          type="text"
          className="search-term"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
