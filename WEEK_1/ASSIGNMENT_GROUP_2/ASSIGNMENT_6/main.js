"use strict";
(function() {

    function sortArray(numbers) {
        return numbers.sort((a, b) => a - b);
    }

    const output = document.getElementById("output");
    let movies = new Array();

    function promptForRating(title) {
        const rating = parseFloat(prompt(`Rate the movie "${title}" (0-10):`));
        if (rating >= 0 && rating <= 10) {
            movies.push({ title: title, rating: rating });
            
        } else {
            alert("Invalid rating. Please enter a number between 0 and 10.");
            promptForRating(title);
        }
    }

    const number = parseInt(prompt("How many movies would you like to rate?"), 10);
    if (isNaN(number) || number <= 0) {
        alert("Please enter a valid positive number.");
    } else {
        for (let i = 0; i < number; i++) {
            const title = window.prompt("Enter the movie title you want to rate:");
            promptForRating(title);
            
        }
    }

    movies.sort((a, b) => b.rating - a.rating);

    let html = `
                <h2>Movies In Order of Ratings</h2>
                <ul>
                `;

    movies.forEach(movie => {
        html += `<li>Title: ${movie.title}, Rating: ${movie.rating !== null ? movie.rating : "Not rated"}</li>`;
    });

    html += `
            </ul>
            `;

    output.innerHTML = html;

})();