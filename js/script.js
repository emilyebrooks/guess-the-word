//2.1 Select unordered list where guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// console.log(guessedLettersElement); 

//2.2 Select Guess! button
const guessLetterButton = document.querySelector(".guess");
// console.log(guessLetterButton); 

//2.3 Select input box where player enters guessed letter
const letterInput = document.querySelector(".letter");
// console.log(letterInput); 

//2.4 Select empty p where word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress"); 
// console.log(wordInProgress); 

//2.5 Select p where remaining guesses will display
const remainingGuessesElement = document.querySelector(".remaining");
// console.log(remainingGuessesElement); 

//2.6 Select span inside the p where the remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span");
// console.log(remainingGuessesSpan); 

//2.7 Select empty p where messages will appear when player guesses a letter
const message = document.querySelector(".message"); 
// console.log(message); 

//2.8 Select hidden button that will appear prompting player to play again
const playAgainButton = document.querySelector(".play-again");
// console.log(playAgainButton); 

//3 Create global var with starting word to test game until fetching from API
const word = "magnolia"; 
// console.log(word); 

const guessedLetters = []; 

//WRITE A FUNCTION TO DISPLAY ● AS PLACEHOLDERS FOR EACH LETTER

const placeholder = function (word) {
    const placeholderLetters = []; 
    for (const letter of word) {
        console.log(letter); 
        placeholderLetters.push("●");
    }
    wordInProgress.innerText= placeholderLetters.join(""); 
};

placeholder(word);  

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    //empty message paragraph
    message.innerText = ""; 
    //grab what was entered in the input
    const guess = letterInput.value;  
    //Make sure it's a single letter 
    const goodGuess = validateInput(guess); 

    if (goodGuess) {
        //User chose a letter, let's guess
        makeGuess(guess); 
    }
    letterInput.value = "";
}); 

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; 
    if (input.length === 0) {
        //is the input empty?
    message.innerText = "Please enter a letter."; 
    } else if (input.length > 1) {
        //Did user type more than one letter?
        message.innerText = "Please enter a single letter."; 
    } else if (!input.match(acceptedLetter)) {
        //Did user type something other than a letter?
        message.innerText = "Please enter a letter from A to Z."; 
    } else {
        //User entered a single letter. return input. 
        return input;
    }
}; 

const makeGuess = function (guess) {
    guess = guess.toUpperCase(); 
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Try again."; 
    } else {
        guessedLetters.push(guess); 
        console.log(guessedLetters); 
        showGuessedLetters(); //call the guessed letters funtion so letter displays when it hasn't been called before. 
        updateWordInProgress(guessedLetters);  
    }
}; 

//Create and name a function to update the page with the letters as player guesses
const showGuessedLetters = function () {
    //clear the list first
    guessedLettersElement.innerHTML = ""; 
    for (const letter of guessedLetters) {
        const li = document.createElement("li"); //create new li items for each letter in the guessedLetters array
        li.innerText = letter; 
        guessedLettersElement.append(li); 
    }
};

//Create and name a function to update the WIP that accepts the guessedLetters array as a parmeter. 
//This will replace the cirlce symbols with the correct letters guessed
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase(); 
    const wordArray = wordUpper.split(""); 
    const revealWord = []; 
    for (const letter of wordArray) {
     if (guessedLetters.includes(letter)) {
         revealWord.push(letter.toUpperCase()); 
     } else {
         revealWord.push("●"); 
     }
}
console.log(revealWord); 
wordInProgress.innerText = revealWord.join(""); 
checkIfWin(); 
}; 

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win"); 
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
}; 

