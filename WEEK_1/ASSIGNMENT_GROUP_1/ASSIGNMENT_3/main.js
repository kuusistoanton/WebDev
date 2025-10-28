"use strict";
(function () {
    window.alert("Input the lengths of the three sides of a triangle and I will tell you its type.");
    function promptForSide() {
        const side = parseFloat(prompt("Enter the length of a side of the triangle:"));
        if (isNaN(side) || side <= 0) {
            alert("Please enter a valid positive number.");
            return promptForSide();
        }
        return side;
    }

    const side1 = promptForSide();
    const side2 = promptForSide();
    const side3 = promptForSide();

    let triangleType = "";
    const output = document.getElementById("output");
    
    if (side1 === side2 && side2 === side3) {
        triangleType = "Equilateral Triangle";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        triangleType = "Isosceles Triangle";
    } else {
        triangleType = "Scalene Triangle";
    }

    const html = `
                <h2>Triangle Type Determination</h2>
                <p>Triangle Type: ${triangleType}</p>
                <p>Sides: ${side1}, ${side2}, ${side3}</p>
                `;

    output.innerHTML = html;

})();