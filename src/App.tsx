import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

interface CalculatorState {
  currentInput: string;
  previousInput: string | null;
  operator: string | null;
}

const App: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    currentInput: '',
    previousInput: null,
    operator: null,
  });

  const addDigit = (digit: string) => {
    const newInput = state.currentInput + digit;
    setState({ ...state, currentInput: newInput });
  };

  const handleOperator = (operator: string) => {
    if (state.previousInput === null && state.currentInput !== '') {
      setState({
        ...state,
        previousInput: state.currentInput,
        operator: operator,
        currentInput: '',
      });
    } else if (state.previousInput !== null) {
      let result;
      switch (state.operator) {
        case '+':
          result = parseFloat(state.previousInput) + parseFloat(state.currentInput);
          break;
        case '-':
          result = parseFloat(state.previousInput) - parseFloat(state.currentInput);
          break;
        case '*':
          result = parseFloat(state.previousInput) * parseFloat(state.currentInput);
          break;
        case '/':
          result = parseFloat(state.previousInput) / parseFloat(state.currentInput);
          break;
        case '%':
          result = (parseFloat(state.previousInput) / 100) * parseFloat(state.currentInput);
          break;
        default:
          return;
      }
      setState({
        previousInput: result.toString(),
        currentInput: result.toString(),
        operator: operator,
      });
    }
  };

  const clearState = () => {
    setState({ currentInput: '', previousInput: null, operator: null });
  };

  const calculate = () => {
    if (state.previousInput === null || state.currentInput === '' || state.operator === null) {
      return;
    }

    let result;
    switch (state.operator) {
      case '+':
        result = parseFloat(state.previousInput) + parseFloat(state.currentInput);
        break;
      case '-':
        result = parseFloat(state.previousInput) - parseFloat(state.currentInput);
        break;
      case '*':
        result = parseFloat(state.previousInput) * parseFloat(state.currentInput);
        break;
      case '/':
        if (state.currentInput !== '0') {
          result = parseFloat(state.previousInput) / parseFloat(state.currentInput);
        } else {
          alert('Error: Division by zero');
          return;
        }
        break;
      default:
        return;
    }

    setState({ previousInput: result.toString(), currentInput: result.toString(), operator: null });
  };

  return (
    <div className="calculator">
      <Display value={state.currentInput} />
      <div className="button-row">
        <Button label="(" onClick={() => addDigit('(')} />
        <Button label=")" onClick={() => addDigit(')')} />
        <Button label="%" onClick={() => addDigit('%')} />
        <Button label="C" onClick={clearState} />
      </div>
      <div className="button-row">
        <Button label="7" onClick={() => addDigit('7')} />
        <Button label="8" onClick={() => addDigit('8')} />
        <Button label="9" onClick={() => addDigit('9')} />
        <Button label="/" onClick={() => addDigit('/')} />

      </div>
      <div className="button-row">
        <Button label="4" onClick={() => addDigit('4')} />
        <Button label="5" onClick={() => addDigit('5')} />
        <Button label="6" onClick={() => addDigit('6')} />
        <Button label="x" onClick={() => handleOperator('*')} />

      </div>
      <div className="button-row">
        <Button label="1" onClick={() => addDigit('1')} />
        <Button label="2" onClick={() => addDigit('2')} />
        <Button label="3" onClick={() => addDigit('3')} />
        <Button label="-" onClick={() => handleOperator('-')} />

      </div>
      <div className="button-row">

      
        <Button label="0" onClick={() => addDigit('0')} />
        <Button label="." onClick={() => addDigit('.')} />
        <Button label="=" onClick={calculate} />
        <Button label="+" onClick={() => handleOperator('+')} />

      </div>
    </div>
  );
};

export default App;
