"use strict";
(function () {
    window.alert("Input your course score and I will tell you your grade.");
    function promptForScore() {
        const score = parseFloat(prompt("Enter your course score:"));
        if (isNaN(score) || score < 0 || score > 100) {
            alert("Please enter a valid score between 0 and 100.");
            return promptForScore();
        }
        return score;
    }

    
    const output = document.getElementById("output");
    const score = promptForScore();
    let grade = "";
    console.log(score);

    if (score >= 88) {
        grade = "5";
    } else if (score >= 76) {
        grade = "4";
    } else if (score >= 64) {
        grade = "3";
    } else if (score >= 52) {
        grade = "2";
    } else if (score >= 40) {
        grade = "1";
    } else {
        grade = "0";
    }
    

    const html = `
                <h2>Course Grade</h2>
                <p>Your Grade: ${grade}</p>
                <p>Your Score: ${score}</p>
                `;

    output.innerHTML = html;

})();