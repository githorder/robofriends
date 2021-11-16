import React from 'react';

const Card = ({ name, id, email }) => {
  return (
    <div className="shadow-4 mw5 dib bg-light-blue br3 pa1 pa4-ns ma2 ba b--black-10 tc grow">
      <img
        className="h4 w4 pa2"
        src={`https://robohash.org/${id}.png?200x200`}
        alt="robot-card"
      />
      <h2 className="f5">{name}</h2>
      <p className="gray">{email}</p>
    </div>
  );
};

export default Card;
