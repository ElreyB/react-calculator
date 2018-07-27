import React, { Fragment } from 'react';

const TextInput = ({ height, width }) => (
  <Fragment>
    <div style={{ height, width }} className="input">
      <span className="input-span">25+25</span>
    </div>
  </Fragment>
);

export default TextInput;
