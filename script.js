//global variables
let playerScore = 0;
let computerScore = 0;

//dom selectors and new elements
const scoreBox = document.querySelector('#scoreBox');
const pvc = document.querySelector('#pvc');
const score = document.createElement('p');
const winMessage = document.createElement('p');

// listens for click event and inputs win messages/score
const moves = document.querySelectorAll('#rock, #paper, #scissors');
moves.forEach((move) => {
  move.addEventListener('click', () => { 
    winMessage.textContent = playRound(move.id, computerMove());
    scoreBox.appendChild(winMessage);

    score.textContent = `Score - You: ${playerScore},  Computer: ${computerScore}`;
    pvc.appendChild(score);

    trackScore(playerScore, computerScore);
  });
});

//stops game after certain number of rounds, refreshes page
function trackScore(playerScore, computerScore) {
  if (playerScore == 5||computerScore == 5) {
    score.textContent = `FINAL SCORE- You: ${playerScore}, Computer: ${computerScore}`
    pvc.appendChild(score);
    
    window.setTimeout(function (){location.reload()},5000);
  }
}

// returns random move
function computerMove(){
  const moves = ['rock', 'paper', 'scissors'];
  let computerPlay = Math.floor(Math.random() * moves.length);
  return(computerPlay, moves[computerPlay]);
}

// returns win/loss message 
function playRound(playerSelect, computerSelect) {
  if (playerSelect === 'rock' && computerSelect === 'rock') {
    return 'Tie!';
  } 
  else if (playerSelect === 'paper' && computerSelect === 'paper') {
    return 'Tie!';
  } 
  else if (playerSelect === 'scissors' && computerSelect === 'scissors') {
    return 'Tie!';
  } 
  else if (playerSelect === 'rock' && computerSelect === 'scissors') {
    playerScore++;
    return `You win! rock beats scissors`;
  } 
  else if (playerSelect === 'paper' && computerSelect === 'rock') {
    playerScore++;
    return `You win! paper beats rock`;
  } 
  else if (playerSelect === 'scissors' && computerSelect === 'paper') {
    playerScore++;
    return `You win! scissors beats paper`;
  } 
  else if (playerSelect === 'rock' && computerSelect === 'paper') {
    computerScore++;
    return `You lose! rock loses to paper`;
  } 
  else if (playerSelect === 'paper' && computerSelect === 'scissors') {
    computerScore++;
    return `You lose! paper loses to scissors`;
  } 
  else if (playerSelect === 'scissors' && computerSelect === 'rock') {
    computerScore++;
    return `You lose! scissors loses rock`;
  } 
}
