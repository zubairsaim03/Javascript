// let secretNumber = Math.floor(Math.random() * 100) + 1;
// let guess = document.getElementById("guess");
// let message = document.getElementById("message");
let guessCount = 0;
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = document.getElementById("guess");
let message = document.getElementById("message");
function checkGuess() {
    if (guess.value === "") return;
    let userGuess = Number(guess.value); guessCount++;
    if (userGuess === secretNumber) {
        message.className = "win";
        message.innerHTML = "You guessed it right! Attempts: " + guessCount;
    } else if (userGuess < secretNumber)
    { message.className = "low"; message.innerHTML = "You guessed too low. Attempts: " + guessCount; }
    else { message.className = "high"; message.innerHTML = "You guessed too high. Attempts: " + guessCount; }
} function reset() {
    guessCount = 0; secretNumber = Math.floor(Math.random() * 100) + 1; guess.value = "";
    message.className = ""; message.innerHTML = "Game reset! Guess a new number.";
} 