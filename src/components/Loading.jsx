import React from 'react';
import { SpinnerCircular } from 'spinners-react';

const Loading = () => {
  return (
    <div className="tc">
      <h1 className="ttu fw3 light-blue f1 lh-title">Loading</h1>
      <SpinnerCircular color="#0080ff" />
    </div>
  );
};

export default Loading;
