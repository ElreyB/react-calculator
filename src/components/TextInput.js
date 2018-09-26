import React, { Fragment } from 'react';

const TextInput = ({ className, userInput }) => (
  <Fragment>
    <div className={className + ' input'}>
      <span className="input-span" value={userInput}>
        {userInput}
      </span>
    </div>
  </Fragment>
);

export default TextInput;
