// returns random move
function computerMove(){
  const moves = ['rock', 'paper', 'scissors'];
  let computerPlay = Math.floor(Math.random() * moves.length);
  return(computerPlay, moves[computerPlay]);
}

const moves = document.querySelectorAll('#rock, #paper, #scissors');
moves.forEach((move) => {
  move.addEventListener('click', () => {
    if (move.id == 'rock'){
      playRock();
    }
    else if (move.id == 'paper'){
      playPaper();
    }
    else {
      playScissors();
    }
  });
});

const scoreBox = document.querySelector('#scoreBox');

function playRock(){
  const inputRock = document.createElement('p');
  inputRock.classList.add('inputRock')

  if (computerMove() === 'rock') {
    inputRock.textContent = 'Tie!';
  } 
  else if (computerMove() === 'scissors') {
    inputRock.textContent = `You win! rock beats scissors`;
    playerScore++;
  } 
  else {
    inputRock.textContent = `You lose! rock loses to paper`;
    computerScore++;
  }

  scoreBox.appendChild(inputRock)
}

function playPaper(){
  const inputPaper = document.createElement('p');
  inputPaper.classList.add('inputPaper')

  if (computerMove() === 'paper') {
    inputPaper.textContent = 'Tie!';
  } 
  else if (computerMove() === 'rock') {
    inputPaper.textContent = `You win! paper beats rock`;
    playerScore++;
  } 
  else {
    inputPaper.textContent = `You lose! paper loses to scissors`;
    computerScore++;
  }

  scoreBox.appendChild(inputPaper)
}

function playScissors(){
  const inputScissors = document.createElement('p');
  inputScissors.classList.add('inputScissors')

  if (computerMove() === 'scissors') {
    inputScissors.textContent = 'Tie!';
  } 
  else if (computerMove() === 'paper') {
    inputScissors.textContent = `You win! scissors beats paper`;
    playerScore++;
  } 
  else {
    inputScissors.textContent = `You lose! scissors loses to rock`;
    computerScore++;
  }

  scoreBox.appendChild(inputScissors)
}

let playerScore = 0;
let computerScore = 0;



 