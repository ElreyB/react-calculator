import React, { Fragment } from 'react';

const TextInput = ({ height, width }) => (
  <Fragment>
    <div style={{ height, width }} className="input" />
  </Fragment>
);

export default TextInput;
