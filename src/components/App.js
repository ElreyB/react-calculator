import React, { Component, Fragment } from 'react';
import Button from './Button';
import TextInput from './TextInput';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="cal-container">
            <TextInput width={'32rem'} height={'8rem'} />
            <Button width={'8rem'} height={'8rem'} text={7} value={7} />
            <Button width={'8rem'} height={'8rem'} text={8} value={8} />
            <Button width={'8rem'} height={'8rem'} text={9} value={9} />
            <Button width={'8rem'} height={'8rem'} text={'/'} value={'divide'} />
            <Button width={'8rem'} height={'8rem'} text={4} value={4} />
            <Button width={'8rem'} height={'8rem'} text={5} value={5} />
            <Button width={'8rem'} height={'8rem'} text={6} value={6} />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'*'}
              value={'multiply'}
            />
            <Button width={'8rem'} height={'8rem'} text={1} value={1} />
            <Button width={'8rem'} height={'8rem'} text={2} value={2} />
            <Button width={'8rem'} height={'8rem'} text={3} value={3} />
            <Button width={'8rem'} height={'8rem'} text={'+'} value={'add'} />
            <Button width={'8rem'} height={'8rem'} text={'DE'} value={'delete'} />
            <Button width={'8rem'} height={'8rem'} text={0} value={0} />
            <Button width={'8rem'} height={'8rem'} text={'CE'} value={'clear'} />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'-'}
              value={'substract'}
            />
            <Button width={'32rem'} height={'8rem'} text={'='} value={'enter'} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
