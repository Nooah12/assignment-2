// Main game arrow function
const playHangman = () => {

  alert(`  Welcome to Hang The Man!
  Enter one letter at a time to guess the right word
  Or the man will die..`)

  let lives = 3;
  const wordList = ['test','hangman','code'];

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
      // Display word and incorrect guesses
      let prompWord = 'Word: ' + displayWord.join(' ');
      let letters = /^[a-zA-Z]{1}$/;
      let guess;

      guess = prompt('Enter a letter! \n\n' + prompWord + '\nIncorrect guess: ' + incorrectGuesses + '\nLives left: ' + lives);

      if (guess === null) {
        alert(`Are you sure you wanna quit??`);
        break;
      }  

      guess = guess.toLowerCase();
      
        // Check if the input is a letter between 'a' and 'z'
      if (!letters.test(guess)) {
        alert('Enter a single letter between a and z.');
        continue;
      }

      // Check if the letter has already been guessed
      if (guessedLetters.includes(guess)) {
        alert('You already guessed that letter. Try again.');
        continue;
      }
      
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
      
      // If the guess is incorrect, add it to the incorrect guesses and decrease lives
      if (!correctGuess) {
        incorrectGuesses.push(guess);
        lives--;
      }
  }

  if (lives === 0) {
    alert('Shiit, you ran out of attempts. The correct word was: ' + selectedWord);
  }

    // Ask if the user wants to play again
  const playAgain = confirm('Lets play again??');
  if (playAgain) {
    playHangman(); // Call the function to start new game
  } else {
    alert('Thanks for playing!');
  }
}

playHangman();