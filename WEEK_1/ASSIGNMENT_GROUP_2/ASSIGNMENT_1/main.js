"use strict";
(function() {
    const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    console.log("Fruits:", fruits);
    console.log("Length of Fruits:", fruits.length);
    console.log("Element at Index 2:", fruits[2]);
    console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

    let vegetables = new Array();
    for (let i = 0; i < 3; i++) {
        vegetables.push(prompt(`Enter the ${i + 1} vegetable to add to the vegetable list:`));
    }
    console.log("Vegetables:", vegetables);
    console.log("Length of Vegetables:", vegetables.length);

})();