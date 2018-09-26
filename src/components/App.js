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
    this.handleDelete = this.handleDelete.bind(this);
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
      const userInput =
        this.getAnswer(prevState.userInput, prevState.operation) ||
        prevState.userInput;
      return {
        userInput,
        operation: undefined
      };
    });
  }

  handleClear() {
    this.setState(prevState => {
      return {
        userInput: '',
        operation: undefined
      };
    });
  }

  handleDelete() {
    this.setState(prevState => {
      const userInput = prevState.userInput.slice(0, -1) || '';
      return {
        userInput
      };
    });
  }

  getAnswer(eqString, operation) {
    const numbers = eqString.split(operation).map(num => Number(num));
    switch (operation) {
      case '+':
        return numbers[0] + numbers[1];
      case '-':
        return numbers[0] - numbers[1];
      case 'x':
        return numbers[0] * numbers[1];
      case '/':
        return numbers[0] / numbers[1];
      default:
        return undefined;
    }
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="cal-container">
            <TextInput className={'xl-btn'} userInput={this.state.userInput} />
            <Button
              className={'s-btn'}
              text={7}
              value={7}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={8}
              value={8}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={9}
              value={9}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={'/'}
              value={'/'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              className={'s-btn'}
              text={4}
              value={4}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={5}
              value={5}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={6}
              value={6}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={'x'}
              value={'x'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              className={'s-btn'}
              text={1}
              value={1}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={2}
              value={2}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={3}
              value={3}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={'+'}
              value={'+'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              className={'s-btn'}
              text={'DE'}
              onClick={this.handleDelete}
            />
            <Button
              className={'s-btn'}
              text={0}
              value={0}
              onClick={this.handleDigits}
            />
            <Button
              className={'s-btn'}
              text={'CE'}
              onClick={this.handleClear}
            />
            <Button
              className={'s-btn'}
              text={'-'}
              value={'-'}
              onClick={
                this.state.operation
                  ? this.handleMultiOperations
                  : this.handleOperations
              }
            />
            <Button
              className={'xl-btn'}
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
