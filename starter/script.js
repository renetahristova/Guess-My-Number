'use strict';

// elements

let againgElement = document.querySelector('.again');
let checkElement = document.querySelector('.check');
let messageElement = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let highscoreElement = document.querySelector('.highscore');
let numberElement = document.querySelector('.number');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// console.log(secretNumber, typeof secretNumber);
// input
checkElement.addEventListener('click', function () {
  let numValueElement = Number(document.querySelector('.guess').value);

  if (!numValueElement) {
    //----EMPTY VALUE ----
    displayMessage('⛔Please, enter a number!');
    //----CORRECT VALUE ----
  } else if (secretNumber === numValueElement) {
    displayMessage('✅Congratulations');
    numberElement.textContent = secretNumber;
    //STYLES
    document.querySelector('body').style.backgroundColor = 'green';
    numberElement.style.width = '20rem';
    //HIGHSCORE
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
    //----WRONG NUMBER ----
  } else if (secretNumber != numValueElement) {
    if (score > 1) {
      displayMessage(
        numValueElement > secretNumber ? '⬆️Too High!' : '⬇️Too Low!'
      );
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('😿Game Over!');
      scoreElement.textContent = 0;
    }
  }
});
// ----TRY AGAIN BUTTON
againgElement.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  // STYLES
  document.querySelector('body').style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
