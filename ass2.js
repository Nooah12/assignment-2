/* let wordList = ["random", "test", "testword"];

let underscores = '_';
let lives = 5; 
let msg;
let userChoice;



/* const getRandomWord = list => {
    return list[Math.floor(Math.random() * wordList.length)];
} 

let getRandomWord = wordList[Math.floor(Math.random() * wordList.length)]
const selectedWord = wordList[getRandomWord];



let guess = prompt('Enter a letter:'); 





/* function allLetter(inputtxt)
      { 

      let letters = /^[a-z]$/;
      if(inputtxt.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }
 */






//////////////////////////////////////////////////


// Word list
/* const words = [
  "javascript",
  "python",
  "html",
  "css",
  "ruby",
  "java",
  "csharp",
  "php",
  "swift",
  "kotlin",
  "typescript",
  "go",
  "rust",
  "scala",
  "lua",
  "perl",
  "r",
  "sql",
  "bash",
  "powershell",
  "clojure",
  "groovy",
  "haskell",
  "ocaml",
  "pascal",
  "prolog",
  "scheme",
  "smalltalk",
  "verilog",
  "vhdl"
];

let score = 0;
score += 10; // Increment the score by 10 for each correct guess

// Select a random word
let word = words[Math.floor(Math.random() * words.length)];

// Initialize game state
let guesses = [];
let remaining = 6;
let result = "";

// Display word as underscores
let display = "";
for (let i = 0; i < word.length; i++) {
  display += "_ ";
}
document.getElementById("word").textContent = display;



// Function to handle a guess
function handleGuess() {
  // Get user input
  let guess = document.getElementById("guess").value.toLowerCase();

  // Clear input field
  document.getElementById("guess").value = "";

  // Check if input is a valid letter
  if (!guess.match(/[a-z]/i)) {
      alert("Please enter a letter.");
      return;
  }

  // Check if letter has already been guessed
  if (guesses.includes(guess)) {
      alert("You already guessed that letter.");
      return;
  }

  // Add letter to guesses
  guesses.push(guess);

  // Check if letter is in word
  if (word.includes(guess)) {
      // Update display with guessed letter
      let newDisplay = "";
      for (let i = 0; i < word.length; i++) {
          if (word[i] === guess) {
              newDisplay += guess + " ";
          } else {
              newDisplay += display[i * 2] + display[i * 2 + 1] + " ";
          }
      }
      display = newDisplay;
      document.getElementById("word").textContent = display;

      // Check if word is complete
      if (!display.includes("_")) {
          result = "You win!";
          document.getElementById("result").textContent = result;
          document.querySelector("form button").disabled = true;
      }
  } else {
      // Decrease remaining guesses
      remaining--;
      document.getElementById("guesses").textContent = "Guesses left: " + remaining;

      // Check if game is over
      if (remaining === 0) {
          result = "You lose! The word was " + word.toUpperCase() + ".";
          document.getElementById("result").textContent = result;

          document.querySelector("form button").disabled = true;
      }
  }

}
// Initialize game
function init() {
  // Reset game state
  guesses = [];
  remaining = 6;
  result = "";
  display = "";
  for (let i = 0; i < word.length; i++) {
      display += "_ ";
  }
  document.getElementById("word").textContent = display;
  document.getElementById("guesses").textContent = "Guesses left: " + remaining;
  document.getElementById("result").textContent = "";

 


// Function to restart the game with the current configuration
function restartGame() {
// Reset game state
guesses = [];
remaining = maxGuesses;
result = "";
display = "";
word = words[Math.floor(Math.random() * words.length)];

// Display word as underscores
for (let i = 0; i < word.length; i++) {
    display += "_ ";
}
document.getElementById("word").textContent = display;
document.getElementById("guesses").textContent = "Guesses left: " + remaining;
document.getElementById("result").textContent = "";



function endGame() {
// Do something when the game ends
}
 */












/////////////////////////////////////////////////////////////
// Constants
const lives = 3;

// Word list
const wordList = ['test', 'hangman','code'];

// Select a random word from the list
const getRandomWord = Math.floor(Math.random() * wordList.length);
const selectedWord = wordList[getRandomWord];

// Arrays to track guessed letters and incorrect guesses
const guessedLetters = [];
const incorrectGuesses = [];

// Initialize the display word with underscores
let displayWord = Array(selectedWord.length).fill('_');

// Main game loop
while (incorrectGuesses.length < lives) {
  // Display current state of the word
  let x = 'Word: ' + displayWord.join(' ');
  let y = guessedLetters.length > 0 ? 'Guessed Letters: ' + guessedLetters.join(', ') : ""; // join return array as a string?

  let letters = /^[a-zA-Z]{1}$/;
  let guess;

  while ( !letters.test(guess)) {
    guess = prompt(x + '\nEnter a letter!' + '\n'+y);
  }

    // show the lives left in the prompt
 
    // Check if the letter has already been guessed
    if (guessedLetters.includes(guess)) {
      alert('You already guessed that letter. Try again.');
      continue;
    }

    // Add the guessed letter to the list
    guessedLetters.push(guess);

  // Check if the guess is correct
  let correctGuess = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guess) {
      displayWord[i] = guess;
      correctGuess = true;
    }
  }
  
  // Check if the entire word has been guessed
  if (displayWord.join('') === selectedWord) {
    alert('Congratulations! You guessed the word: ' + selectedWord);
    break;
  }
  
  // If the guess is incorrect, add it to the incorrect guesses
  if (!correctGuess) {
    incorrectGuesses.push(guess);
  }
}

// Display final result
if (incorrectGuesses.length === lives) {
  alert('Sorry, you ran out of attempts. The correct word was: ' + selectedWord);
}



// så länge if statement ligger i en loop
// if prompt === null 
// break;