"use strict";
(function() {
    let numbers = new Array();
    let number = 0
    do {
        number = parseFloat(prompt("Enter a number (or 0 to finish):"));
        if (!isNaN(number) && number != 0) {
            numbers.push(number);
        }
    } while (number != 0);

    const output = document.getElementById("output");

    let isEven = false;
    let evenNumbers = new Array();
    for (const element of numbers) {
        if (element % 2 === 0) {
            isEven = true;
            evenNumbers.push(element);
        }
    }

    let html = ``;

    if (isEven) {
        html += `<p>Even numbers: ${evenNumbers.join(", ")}</p>`;
    } else {
        html += `<p>Even numbers: None</p>`;
    }

    output.innerHTML = html;

})();