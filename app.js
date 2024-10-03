let currentInput = '';
let previousInput = '';
let operation = null;

const appendNumber = (number) => {
  currentInput += number;
  updateDisplay();
};

const setOperation = (op) => {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
};

const calculate = () => {
  if (previousInput === '' || currentInput === '') return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  currentInput = `${result}`;
  operation = null;
  previousInput = '';
  updateDisplay();
};

const clearDisplay = () => {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
};

const updateDisplay = () => {
  document.getElementById('display').value = currentInput;
};
