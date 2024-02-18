import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

interface CalculatorState {
  currentInput: string;
  previousInput: string | null;
  operator: string | null;
  reserCalculation: boolean;
}

const App: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    currentInput: '',
    previousInput: null,
    operator: null,
    reserCalculation: false,
  });

  // Add digit to the current input string and reset the calculation state if needed.
  const addDigit = (digit: string) => {
    const newInput = state.reserCalculation ? digit : state.currentInput + digit;
    setState({
      ...state,
      currentInput: newInput,
      reserCalculation: false, 
    });
  };
    //  Handle the operator button click. If the previous input is null and the current input is not empty
    //  set the previous input to the current input and the operator to the clicked operator. 
    
  const handleOperator = (operator: string) => {
    if (state.previousInput === null && state.currentInput !== '') {
      setState({
        ...state,
        previousInput: state.currentInput,
        operator: operator,
        currentInput: '',
      });
    } else if (state.previousInput !== null) {
      calculate();
      setState({
        ...state,
        operator: operator,
        reserCalculation: true, 
      });
    }
  };
 
  const clearState = () => {
    setState({ currentInput: '', previousInput: null, operator: null, reserCalculation: false });
  };

  //  Calculate the result of the current input and the previous input using the selected operator.

  const calculate = () => {
    if (state.previousInput === null || state.currentInput === '' || state.operator === null) {
      return;
    }

    const operators: Record<string, (a: number, b: number) => number> = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => (b !== 0 ? a / b : NaN),
    };

    const result = operators[state.operator](
      parseFloat(state.previousInput),
      parseFloat(state.currentInput)
    );

    if (isNaN(result) || !isFinite(result)) {
      
      clearState();
    } else {
      setState({
        previousInput: result.toString(),
        currentInput: result.toString(),
        operator: null,
        reserCalculation: true,
      });
    }
  };

  return (
    <div className="calculator">
      <Display value={state.currentInput} />
      <div className="button-row">
        <Button label="7" onClick={() => addDigit('7')} />
        <Button label="8" onClick={() => addDigit('8')} />
        <Button label="9" onClick={() => addDigit('9')} />
        <Button label="/" onClick={() => handleOperator('/')} />
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
        <Button label="C" onClick={clearState} />
        <Button label="0" onClick={() => addDigit('0')} />
        <Button label="=" onClick={calculate} />
        <Button label="+" onClick={() => handleOperator('+')} />
      </div>
    </div>
  );
};

export default App;
