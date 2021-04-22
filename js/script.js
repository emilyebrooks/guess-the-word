// Targeting the unordered list where guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");

// Targeting the "Guess!" button
const guessLetterButton = document.querySelector(".guess");

// Targeting the input where the player enters their guess
const letterInput = document.querySelector(".letter");

// Targeting the empty paragraph where the word in progress appears
const wordInProgress = document.querySelector(".word-in-progress");

//Targeting the paragraph where remaining guesses displays
const remainingGuessesElement = document.querySelector(".remaining");

//Targeting the span inside the paragraph where remaining guesses display
const remainingGuessesSpan = document.querySelector(".remaining span");

//Targeting messages after guesses
const message = document.querySelector(".message");

//Targeting hidden "Play Again" button
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia"; //Default word if fetch request fails

const guessedLetters = [];

// Display circle symbols as placeholders for the words letters
const placeholder = function (word) {
const placeholderLetters = []; 
for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
}
wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word); 
    
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Grab what was entered in the input
    const guess = letterInput.value;
    // console.log(guess); 
    // Make sure input is a single letter
    const goodGuess = validateInput(guess); 

    if (goodGuess) {
        makeGuess(guess); 
    }
    letterInput.value = ""; 
});
 
const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        // Did user enter more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        // Did user enter something other than a letter?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // Single letter was entered
        return input; 
    }
    };

    const makeGuess = function (guess) {
        guess = guess.toUpperCase(); 
        if (guessedLetters.includes(guess)) {
            message.innerText = "You already guessed that letter, silly. Try again.";
        }
        else { 
            guessedLetters.push(guess); 
            console.log(guessedLetters);
        }
    };
