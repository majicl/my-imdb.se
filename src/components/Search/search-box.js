import React from 'react';
import './search-box.scss';

export default ({ onChange }) => {
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};
