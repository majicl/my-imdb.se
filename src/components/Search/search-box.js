import React, { useState } from 'react';
import './search-box.scss';

export default ({ onSearch, placeholder, query = '', loading }) => {
  const [keyword, setKeyword] = useState(query);
  return (
    <form
      className="container search-container"
      onSubmit={e => {
        e.preventDefault();
        onSearch(keyword);
      }}
    >
      <div className="row">
        <input
          type="text"
          className="search-term"
          placeholder={placeholder}
          onChange={e => setKeyword(e.target.value)}
          defaultValue={query}
        />
      </div>
      <div className="btn-container">
        <button type="submit">
          {loading && <i>wait...</i>}
          {!loading && <span>Search</span>}
        </button>
      </div>
    </form>
  );
};
