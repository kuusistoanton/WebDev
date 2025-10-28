"use strict";
(function () {
    window.alert("Input a positive integer and I will tell you the sum of all natural numbers including and up to that number.");
    function promptForNumber() {
        const number = parseInt(prompt("Enter a positive integer:"), 10);
        if (isNaN(number) || number <= 0) {
            alert("Please enter a valid positive integer.");
            return promptForNumber();
        }
        return number;
    }

    const output = document.getElementById("output");
    const number = promptForNumber();
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    const html = `
                <h2>Sum of Natural Numbers</h2>
                <p>The sum of all natural numbers up to ${number} is: ${sum}</p>
                `;

    output.innerHTML = html;

})();