// JavaScript para la calculadora en la Sección 3
const firstValueInput = document.getElementById("firstValue");
const secondValueInput = document.getElementById("secondValue");
const operationSelect = document.getElementById("operacion");
const calculateButton = document.getElementById("calculate");
const resultSpan = document.getElementById("result");

calculateButton.addEventListener("click", function () {
  const firstValue = parseFloat(firstValueInput.value);
  const secondValue = parseFloat(secondValueInput.value);
  const operacion = operationSelect.value;

  let result;

  switch (operacion) {
    case "suma":
      result = firstValue + secondValue;
      break;
    case "resta":
      result = firstValue - secondValue;
      break;
    case "multiplicacion":
      result = firstValue * secondValue;
      break;
    case "division":
      if (secondValue !== 0) {
        result = firstValue / secondValue;
      } else {
        result = "Error: División por cero";
      }
      break;
    default:
      result = "Operación no válida";
  }

  resultSpan.textContent = result;
});


// JavaScript para la calculadora de edad en la Sección 4
const birthYearInput = document.getElementById("birthYear");
const calculateAgeButton = document.getElementById("calculateAge");
const ageResultSpan = document.getElementById("ageResult");

calculateAgeButton.addEventListener("click", function () {
  const birthYear = parseInt(birthYearInput.value);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (!isNaN(birthYear)) {
    ageResultSpan.textContent = "La edad en 2023 sería " + age + " años.";
  } else {
    ageResultSpan.textContent = "Por favor, introduce un año válido.";
  }
});



// JavaScript para la calculadora de edad en la Sección 4
