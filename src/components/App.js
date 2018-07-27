import React, { Component, Fragment } from 'react';
import Button from './Button';
import TextInput from './TextInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      operation: undefined
    };

    this.handleDigits = this.handleDigits.bind(this);
    this.handleOperations = this.handleOperations.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleMultiOperations = this.handleMultiOperations.bind(this);
  }

  handleDigits(e) {
    const userInput = e.target.value;
    this.setState(prevState => {
      return {
        userInput: prevState.userInput + userInput
      };
    });
  }

  handleOperations(e) {
    const operation = e.target.value;
    this.setState(prevState => {
      return {
        userInput: prevState.userInput + operation,
        operation
      };
    });
  }

  handleMultiOperations(e) {
    const operation = e.target.value;
    this.setState(prevState => {
      return {
        userInput:
          this.getAnswer(prevState.userInput, prevState.operation) + operation,
        operation
      };
    });
  }

  handleEnter() {
    this.setState(prevState => {
      return {
        userInput: this.getAnswer(prevState.userInput, prevState.operation),
        operation: undefined
      };
    });
  }

  handleClear() {
    this.setState(prevState => {
      return {
        userInput: '',
        firstNum: 0,
        secondNum: 0,
        operation: undefined
      };
    });
  }

  getAnswer(eqString, operation) {
    const numbers = eqString.split(operation);
    switch (operation) {
      case '+':
        return Number(numbers[0]) + Number(numbers[1]);
      case '-':
        return Number(numbers[0]) - Number(numbers[1]);
      case 'x':
        return Number(numbers[0]) * Number(numbers[1]);
      case '/':
        return Number(numbers[0]) / Number(numbers[1]);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="cal-container">
            <TextInput
              width={'32rem'}
              height={'8rem'}
              userInput={this.state.userInput}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={7}
              value={7}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={8}
              value={8}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={9}
              value={9}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'/'}
              value={'/'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={4}
              value={4}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={5}
              value={5}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={6}
              value={6}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'x'}
              value={'x'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={1}
              value={1}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={2}
              value={2}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={3}
              value={3}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'+'}
              value={'+'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'.'}
              value={'.'}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={0}
              value={0}
              onClick={this.handleDigits}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'CE'}
              onClick={this.handleClear}
            />
            <Button
              width={'8rem'}
              height={'8rem'}
              text={'-'}
              value={'-'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              width={'32rem'}
              height={'8rem'}
              text={'='}
              value={'enter'}
              onClick={this.handleEnter}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
