import React from 'react';

const Button = ({ width, height, text, value, onClick }) => (
  <button style={{ width, height }} value={value} onClick={onClick}>
    {text}
  </button>
);

export default Button;
