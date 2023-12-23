alert(`Welcome to Hang The Man!
Enter one letter at a time to guess the right word
Otherwise he dies..`);

const lives = 3;

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
  let prompWord = 'Word: ' + displayWord.join(' ');
  let prompGuess = guessedLetters.length > 0 ? 'Guessed Letters: ' + guessedLetters.join(', ') : ""; // join return array as a string?

  let letters = /^[a-zA-Z]{1}$/;
  let guess;

  while ( !letters.test(guess)) {
    guess = prompt('Enter a letter! \n' + prompGuess + '\n' + prompWord);

  }
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
