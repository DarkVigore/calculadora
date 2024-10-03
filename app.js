let currentInput = "";
let operation = "";
let previousInput = "";

const appendNumber = (number) => {
  currentInput += number;
  updateDisplay(currentInput);
};

const setOperation = (op) => {
  if (currentInput === "") return; // No hacer nada si no hay número
  if (previousInput !== "") {
    calculate(); // Calcular si hay una operación previa
  }
  operation = op;
  previousInput = currentInput;
  currentInput = "";
};

const calculate = () => {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return; // Verificar si los valores son números

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operation = "";
  previousInput = "";
  updateDisplay(currentInput);
};

const clearDisplay = () => {
  currentInput = "";
  previousInput = "";
  operation = "";
  updateDisplay("");
};

const updateDisplay = (value) => {
  document.getElementById("display").value = `${value}`; // Usar template string
};

