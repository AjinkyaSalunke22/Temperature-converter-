const temperatureInput = document.getElementById("temperature-input");
const unitSelect = document.getElementById("unit-select");
const convertButton = document.getElementById("convert-button");
const output = document.getElementById("output");

convertButton.addEventListener("click", function() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (unit === "celsius") {
    output.innerHTML = (temperature * 9/5 + 32).toFixed(2) + "°F";
  } else if (unit === "fahrenheit") {
    output.innerHTML = ((temperature - 32) * 5/9).toFixed(2) + "°C";
  } else {
    output.innerHTML = "Invalid unit";
  }
});
