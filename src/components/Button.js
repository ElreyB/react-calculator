import React from 'react';

const Button = ({ text, value, onClick, className }) => (
  <button value={value} onClick={onClick} className={className}>
    {text}
  </button>
);

export default Button;
