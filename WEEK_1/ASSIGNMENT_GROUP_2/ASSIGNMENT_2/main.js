"use strict";
(function() {
    let numbers = new Array();
    for (let i = 0; i < 5; i++) {
        const number = parseFloat(prompt(`Enter [${i + 1}] number to add to the numbers list:`));
        if (isNaN(number)) {
            alert("Please enter a valid number.");
            i--; // Decrement i to repeat this iteration
        } else {
            numbers.push(number);
        }
    }

    console.log("Numbers:", numbers);
    let numberToCheck = parseFloat(window.prompt("Enter a number to check if it's in the list:"));
    while (isNaN(numberToCheck)) {
        alert("Please enter a valid number.");
        numberToCheck = parseFloat(window.prompt("Enter a number to check if it's in the list:"));
    }

    if (numbers.includes(numberToCheck)) {
        window.alert(`The number ${numberToCheck} is in the list.`);
    } else {
        window.alert(`The number ${numberToCheck} is not in the list.`);
    }

    numbers.pop();
    console.log("Numbers after removing the last element:", numbers);
    numbers.sort((a, b) => a - b);
    console.log("Numbers after sorting in ascending order:", numbers);

})();