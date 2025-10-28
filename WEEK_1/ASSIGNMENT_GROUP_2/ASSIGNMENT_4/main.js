"use strict";
(function() {

    function sortArray(arr) {
        return arr.sort((a, b) => a - b);
    }

    const numbers = [6, 4, 9, 1, 3, 5, 8, 2, 7];
    const sortedNumbers = sortArray(numbers.slice());
    console.log("Original array:", numbers);
    console.log("Sorted array:", sortedNumbers);

})();