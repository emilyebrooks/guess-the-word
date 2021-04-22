// Targeting the unordered list where guessed letters appear
const guessed = document.querySelector(".guessed-letters");

// Targeting the "Guess!" button
const guessButton = document.querySelector(".guess");

// Targeting the input where the player enters their guess
const letterEntry = document.querySelector(".letter");

// Targeting the empty paragraph where the word in progress appears
const wordInProgress = document.querySelector(".word-in-progress");

//Targeting the paragraph where remaining guesses displays
const guessesRemaining = document.querySelector(".remaining");

//Targeting the span inside the paragraph where remaining guesses display
const remainingSpan = document.querySelector(".remaining span");

//Targeting messages after guesses
const message = document.querySelector(".message");

//Targeting hidden "Play Again" button
const playAgain = document.querySelector(".play-again");

const word = "magnolia"; //Default word if fetch request fails

// Display circle symbols as placeholders for the words letters
const placeholder = function (word) {
const placeholderCircles = []; 
for (const letter of word) {
    console.log(letter);
    placeholderCircles.push("●");
}
wordInProgress.innerText = placeholderCircles.join("");
};

placeholder(word); 
    
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = letterEntry.value;
    console.log(inputValue); 
    letterEntry.value = ""; 
});