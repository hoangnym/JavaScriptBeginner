'use strict';

// DOM Manipulation

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

// Handling click events
// check button
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess || guess > 20) {
        document.querySelector('.message').textContent = "No valid number!";

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        // check if score is higher than highscore => yes: update
        const highScore = document.querySelector('.highscore').textContent;
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
        }

        // guess too high
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Too high!";
        score--;

        // guess too low
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too Low!";
        score--;
    }

    document.querySelector('.score').textContent = score;

    if (score === 0) {
        document.querySelector('.message').textContent = "You lost the game!";
    }
});


// implement reset functionality
document.querySelector(".again").addEventListener("click", function() {

    const reset = document.querySelector(".again").textContent;
    console.log(reset, typeof reset);
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = "Start guessing ..."

})