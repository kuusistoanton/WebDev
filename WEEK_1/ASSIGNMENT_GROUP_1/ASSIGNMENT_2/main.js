(function () {
    function promptForCoordinates() {
        window.alert("Enter 2 sets of coordinates as 'x, y' (e.g. 27, 14) and I will calculate the distance between them.");
        while (true) {
            const input1 = window.prompt("Enter the first coordinates: ");
            const input2 = window.prompt("Enter the second coordinates: ");
            if (input1 === null || input2 === null) return null;
            const parts1 = input1.split(",").map(part => part.trim());
            const parts2 = input2.split(",").map(part => part.trim());

            if (parts1.length !== 2 || parts2.length !== 2) {
                alert("Invalid input. Please enter coordinates as 'latitude, longitude'.");
                continue;
            }

            const x1 = parseFloat(parts1[0]);
            const y1 = parseFloat(parts1[1]);
            const x2 = parseFloat(parts2[0]);
            const y2 = parseFloat(parts2[1]);

            if (Number.isNaN(x1) || Number.isNaN(y1) || Number.isNaN(x2) || Number.isNaN(y2)) {
                alert("Invalid input. Please enter valid numbers for coordinates.");
                continue;
            }

            return [[x1, y1], [x2, y2]];
        }
    }

    const coordinates = promptForCoordinates();
    if (coordinates === null) {
        alert("No valid coordinates entered.");
        return;
    }

    const [[x1, y1], [x2, y2]] = coordinates;

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Display the result
    const output = document.getElementById("output");
    output.innerHTML = `
        <h1>Distance Calculation</h1>
        <p>Coordinates 1: ${x1.toFixed(6)}, ${y1.toFixed(6)}</p>
        <p>Coordinates 2: ${x2.toFixed(6)}, ${y2.toFixed(6)}</p>
        <p>Distance: ${distance.toFixed(2)} km</p>
    `;
})();