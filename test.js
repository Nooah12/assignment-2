alert(`Welcome to Hang The Man!
Enter one letter at a time to guess the right word
Or he dies..`);

// Constants
let lives = 3;

// Word list
const wordList = ['code'];

// Select a random word from the list
const randomIndex = Math.floor(Math.random() * wordList.length);
const selectedWord = wordList[randomIndex];

// Arrays to track guessed letters and incorrect guesses
const guessedLetters = [];
const incorrectGuesses = [];

// Initialize the display word with underscores
let displayWord = Array(selectedWord.length).fill('_');

// Main game loop
while (lives > 0) {
  // Display guessed letters and incorrect guesses
  let prompWord = 'Word: ' + displayWord.join(' ');
  let letters = /^[a-zA-Z]{1}$/;
  let guess;

  while (!letters.test(guess)) {
    guess = prompt('Enter a letter! \n\n' + prompWord + '\nIncorrect guess: ' + incorrectGuesses + '\nLives left: ' + lives);
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
  
  // If the guess is incorrect, add it to the incorrect guesses and decrement maxAttempts
  if (!correctGuess) {
    incorrectGuesses.push(guess);
    lives--;
  }
}

// Display final result
if (lives === 0) {
  alert('Sorry, you ran out of attempts. The correct word was: ' + selectedWord);
}
