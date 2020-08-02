import React from 'react';

const Card = ({ children }) => {
  const header = React.Children.map(children, child => child.type.displayName === 'Header' ? child : null);
  const body = React.Children.map(children, child => child.type.displayName === 'Body' ? child : null);
  const footer = React.Children.map(children, child => child.type.displayName === 'Footer' ? child : null);
  return (
    <div className="card">
      {header}
      <div className="card-body">
        {body}
      </div>
      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
}

const Header = ({ children }) => children;
Header.displayName = 'Header';
Card.Header = Header;

const Body = ({ children }) => children;
Body.displayName = 'Body';
Card.Body = Body;

const Footer = ({ children }) => children;
Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;
