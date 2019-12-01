import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './account-menu.scss';

export default () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="account-menu"
      onClick={e => {
        e.stopPropagation();
        setMenuVisible(!menuVisible);
      }}
    >
      {' '}
      <span aria-labelledby="" role="img">
        🙍
      </span>
      Majid
      {menuVisible && (
        <div className="menu">
          <ul>
            <li>
              <Link to="/account/favorites">My Favorites</Link>
            </li>
            <li>
              <Link to="/account/list">My List</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
