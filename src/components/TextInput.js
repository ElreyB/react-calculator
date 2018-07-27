import React, { Fragment } from 'react';

const TextInput = ({ height, width, userInput }) => (
  <Fragment>
    <div style={{ height, width }} className="input">
      <span className="input-span" value={userInput}>
        {userInput}
      </span>
    </div>
  </Fragment>
);

export default TextInput;
