"use strict";
(function() {

    function sortArray(numbers, order) {
        if (order === "asc") {
            return numbers.sort((a, b) => a - b);
        }
        if (order === "desc") {
            return numbers.sort((a, b) => b - a);
        }
        console.error("Invalid sort order specified. Use 'asc' or 'desc'.");
        return numbers;
    }

    const numbers = [6, 4, 9, 1, 3, 5, 8, 2, 7];
    const numbers2 = [10, -2, 33, 4, 0, -15, 8];
    console.log("Original array:", numbers);
    console.log("Array 1 ascending", sortArray(numbers.slice(), "asc"));  // Ascending order
    console.log("Array 1 descending", sortArray(numbers.slice(), "desc")); // Descending order
    console.log("Array 1 invalid order test", sortArray(numbers.slice(), "sdjfsdkfjh")); // Invalid order

    console.log("Array 2 ascending", sortArray(numbers2.slice(), "asc"));  // Ascending order
    console.log("Array 2 descending", sortArray(numbers2.slice(), "desc")); // Descending order
    console.log("Array 2 invalid order test", sortArray(numbers2.slice(), "sdjfsdkfjh")); // Invalid order

})();