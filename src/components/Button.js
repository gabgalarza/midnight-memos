import React from 'react'

const Button = ({to, classes, type, children}) => {
  return (
    <button
      className={classes}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button