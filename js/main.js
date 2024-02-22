'use strict';

const numberInput = document.querySelector('.js-numberInput');
const guessButton = document.querySelector('.js-button');
const hintDiv = document.querySelector('.js-hint');
const attemptsDiv = document.querySelector('.js-attempts');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let attemptCount = 0;
const maxNumber = 100;
const randomNumber = getRandomNumber(maxNumber);
console.log(`Random number: ${randomNumber}`);


function updateAttempts(count) {
  attemptsDiv.innerHTML = `Número de intentos: ${count}`;
}


function handleGuess(event) {
  event.preventDefault(); 

  const userGuess = parseInt(numberInput.value);
  attemptCount++;
  updateAttempts(attemptCount);

  if (userGuess < 1 || userGuess > maxNumber) {
    hintDiv.innerHTML = 'El número debe estar entre 1 y 100.';
    numberInput.focus();
  } else if (userGuess === randomNumber) {
    hintDiv.innerHTML = 'Has ganado campeona!!!';
    guessButton.disabled = true; 
    setTimeout(function() {
        window.location.reload();
      }, 2000); 
  } else if (userGuess < randomNumber) {
    hintDiv.innerHTML = 'Demasiado bajo.';
  } else {
    hintDiv.innerHTML = 'Demasiado alto.';
  }
  numberInput.value = '';
  numberInput.focus(); 
}

guessButton.addEventListener('click', handleGuess);

  