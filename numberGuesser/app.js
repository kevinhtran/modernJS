// Section 4: Number Guesser Project
// [Part 3] - Lose Case & Game Over

/* 
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
// notice this convention of defining variables
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - won

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct!, you WIN!`, 'green');

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // Game over - lost

      // Disable input
      guessInput.disabled = true;
      // Change border color
      guessInput.style.borderColor = 'red';
      // Set message
      setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
    } else {
      // Game continues - answer wrong

      //Change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Tell user it's the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = 'red';
  message.textContent = msg;
}



