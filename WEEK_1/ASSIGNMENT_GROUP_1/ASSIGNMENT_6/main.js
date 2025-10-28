"use strict";
(function () {
    window.alert("Input a positive integer and I will create a multiplication table up to that number.");
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

    let html = `<h2>Multiplication Table</h2>
                <table>
                    <tr>`;

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            html += `<td>${i * j}</td>`;
        }
        html += `</tr>
        <tr>`;
    }

    html += `</tr>
                </table>
                `;
                
    output.innerHTML = html;

})();