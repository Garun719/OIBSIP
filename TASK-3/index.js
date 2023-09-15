document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultText = document.getElementById("converted-temperature");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (isNaN(temperature)) {
            alert("Please enter a valid number for temperature.");
            return;
        }
        if (unit === "celsius") {
            convertedTemperature = (temperature * 9/5) + 32;
            resultText.textContent = `${convertedTemperature.toFixed(2)} °F`;
        } else {
            convertedTemperature = (temperature - 32) * 5/9;
            resultText.textContent = `${convertedTemperature.toFixed(2)} °C`;
        }
    });
});
