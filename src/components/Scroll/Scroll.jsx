import React from 'react';

import './Scroll.styles.css';

const Scroll = ({ children }) => {
  return <div className="scrollBar overflow-scroll">{children}</div>;
};

export default Scroll;
