# Calculator with TypeScript

This React application builds a basic calculator using functional components and state management.

## Overview

# Install dependencies

```
npm install
```

# Run the page

```
npm run dev
```

## Components

- App: The main component representing the calculator itself. It manages the state and renders the UI elements.

- Display: A custom component responsible for displaying the current input or calculation result.

- Button: Another custom component representing individual calculator buttons, each handling digit input or operator selection.

## State

- CurrentInput: Stores the number being currently entered or displayed.

- PreviousInput: Holds the previous number entered, used for calculations.

- Operator: Represents the selected operator (+, -, \*, /).

- ResetCalculation: A flag indicating if the calculator should be reset for a new calculation after an operation.

## Functions

- AddDigit: Appends a digit to the currentInput or starts a new input if a calculation was just performed.

- HandleOperator: Stores the current input as previousInput, sets the operator, and performs a calculation if possible.

- ClearState: Resets all state values to their initial states.

- Calculate: Performs the calculation based on the current state values (previousInput, operator, and currentInput), handling potential errors.

## User Experience

- Users can enter numbers using digit buttons.

- Operator buttons (+, -, \*, /) perform the selected operation on the current and previous inputs.

- The C button clears the current input.

- The = button triggers the calculation and displays the result.
