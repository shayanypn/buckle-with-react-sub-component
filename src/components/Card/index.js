import React from 'react';

const Card = ({ cover_image, children, footer }) => (
  <div className="card">
    <img src={cover_image} className="card-img-top" alt="cover" />
    <div className="card-body">
      {children}
    </div>
    <div className="card-footer">
      <small className="text-muted">{footer}</small>
    </div>
  </div>
);

export default Card;
