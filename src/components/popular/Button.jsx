import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, onClick, href, className = '', height, width, ...props }) {
  return href ? (
    <Link to={href}>
      <button className={`${height} ${width} ${className}`} {...props} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={`${height} ${width} ${className}`} {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
