import React from 'react';

import './SearchBox.styles.css';

const SearchBox = ({ SearchChange }) => {
  return (
    <input
      className="pv3 mb3 input-reset ba b--washed-blue tc"
      onChange={SearchChange}
      type="search"
      placeholder="search robots"
    />
  );
};

export default SearchBox;
