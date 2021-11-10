//2.1 Select unordered list where guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");
// console.log(guessedLetters); 

//2.2 Select Guess! button
const guessButton = document.querySelector(".guess");
// console.log(guessButton); 

//2.3 Select input box where player enters guessed letter
const guessBox = document.querySelector(".letter");
// console.log(guessBox); 

//2.4 Select empty p where word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress"); 
// console.log(wordInProgress); 

//2.5 Select p where remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");
// console.log(remainingGuesses); 

//2.6 Select span inside the p where the remaining guesses will display
const numGuessesRemaining = document.querySelector(".remaining span");
// console.log(numGuessesRemaining); 

//2.7 Select empty p where messages will appear when player guesses a letter
const message = document.querySelector(".message"); 
// console.log(message); 

//2.8 Select hidden button that will appear prompting player to play again
const playAgainButton = document.querySelector(".play-again");
// console.log(playAgainButton); 

//3 Create global var with starting word to test game until fetching from API
const word = "magnolia"; 
// console.log(word); 

//WRITE A FUNCTION TO ADD PLACEHOLDERS FOR EACH LETTER

const placeholder = function (word) {
    const placeholderLetters = []; 
    for (const letter of word) {
        console.log(letter); 
        placeholderLetters.push("●");
    }
    wordInProgress.innerText= placeholderLetters.join(""); 
};
//Call the function and pass the word variable as an argument. 
//use an array and then join it back to a string using .join("") method.

placeholder(word);  

guessButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    const inputValue = guessBox.value;  
    console.log(inputValue); 
        guessBox.value=""; 
}); 