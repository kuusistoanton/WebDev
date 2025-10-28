(function () {
    function promptForCelsius() {
        while (true) {
            const input = window.prompt("Enter temperature in Celsius (e.g. 25): ");
            if (input === null) return null;
            const value = parseFloat(input.trim());
            if (!Number.isNaN(value)) return value;
            alert("Please enter a valid number for Celsius.");
        }
    }

    const celsius = promptForCelsius();

    // Choose a place to render results: element with id "output" or document.body
    const container = document.getElementById("output") || document.body;

    if (celsius === null) {
        const msg = "<p>No temperature entered.</p>";
        if (container === document.body) container.innerHTML = msg;
        else container.innerHTML = msg;
        return;
    }

    const fahrenheit = celsius * 9 / 5 + 32;
    const kelvin = celsius + 273.15;

    const html = `
        <h1>Temperature Conversion</h1>
        <p>Input (Celsius): ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;

    // Render into the chosen container
    container.innerHTML = html;
})();