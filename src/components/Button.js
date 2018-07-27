import React from 'react';

const Button = ({ width, height, text, value }) => (
  <button style={{ width, height }} value={value}>
    {text}
  </button>
);

export default Button;
