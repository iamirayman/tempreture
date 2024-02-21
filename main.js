// C = (F - 32) * 5/9 formula
// F = (C * 9/5) + 32 formula
let fahrenheitValue;
let fahrenheitResult;
let celsiusValue;
let celsiusResult;
function convertFahrenheit() {
  const fahrenheitContainer = document.querySelector(
    ".fahrenheit-result-container"
  );
  fahrenheitValue = document.getElementById("Fahrenheit").value;
  fahrenheitResult = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
  let htmlFahrenheit = `
  <p  class="fahrenheit-result"> ${
    fahrenheitValue || 0
  }°F = ${fahrenheitResult}°C</p>
  `;
  fahrenheitContainer.innerHTML = htmlFahrenheit;
  editWorkingFormula()
}

function convertCelsius() {
  const celsiusContainer = document.querySelector(".celsius-result-container");
  celsiusValue = document.getElementById("Celsius").value;
  celsiusResult = ((celsiusValue * 9) / 5 + 32).toFixed(2);
  let htmlCelsius = `
  <p  class="fahrenheit-result"> ${celsiusValue || 0}°C = ${celsiusResult}°F</p>
  `;
  celsiusContainer.innerHTML = htmlCelsius;
  editWorkingFormula()
}

function showFormula() {
  if (
    document.querySelector(".formula-button").innerHTML === "Show formula ∨"
  ) {
    document.querySelector(".formula-div").classList.add("open");
    document.querySelector(".formula-button").classList.add("borders");
    document.querySelector(".formula-button").innerHTML = "Show formula ∧";
  } else {
    document.querySelector(".formula-div").classList.remove("open");
    document.querySelector(".formula-button").classList.remove("borders");
    document.querySelector(".formula-button").innerHTML = "Show formula ∨";
  }
}

function showWorking() {
  if (
    document.querySelector(".working-button").innerHTML === "Show working ∨"
  ) {
    document.querySelector(".working-div").classList.add("open");
    document.querySelector(".working-button").classList.add("borders");
    editWorkingFormula();
    document.querySelector(".working-button").innerHTML = "Show working ∧";
  } else {
    document.querySelector(".working-div").classList.remove("open");
    document.querySelector(".working-button").classList.remove("borders");
    document.querySelector(".working-button").innerHTML = "Show working ∨";
  }
}

function editWorkingFormula() {
  document.querySelector(".working-div").innerHTML = `
  <p class="working-title">Fahrenheit to Celsius formula :</p>
  <p class="working-content">(${fahrenheitValue || 0}°F - 32) &times; 5 &divide; 9 = ${fahrenheitResult || 0}°C</p>
  <p class="working-title">Celsius to Fahrenheit formula :</p>
  <p class="working-content">(${celsiusValue || 0}°C &times; 9 &divide; 5) + 32 = ${celsiusResult || 0}°F</p>
  `;
}
