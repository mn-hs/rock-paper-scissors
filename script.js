// gets player input
function playerMove() {
  const playerPlay = window.prompt('Choose: rock, paper, or scissors.');
  let choice = playerPlay.toLowerCase();
  
  if (choice == 'rock'||choice == 'paper'||choice == 'scissors'){
    return choice;
  } else {
    return 'Please choose a valid move';
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
    return `You win! rock beats scissors`;
  } 
  else if (playerSelect === 'paper' && computerSelect === 'rock') {
    return `You win! paper beats rock`;
  } 
  else if (playerSelect === 'scissors' && computerSelect === 'paper') {
    return `You win! scissors beats paper`;
  } 
  else if (playerSelect === 'rock' && computerSelect === 'paper') {
    return `You lose! rock loses to paper`;
  } 
  else if (playerSelect === 'paper' && computerSelect === 'scissors') {
    return `You lose! paper loses to scissors`;
  } 
  else if (playerSelect === 'scissors' && computerSelect === 'rock') {
    return `You lose! scissors loses rock`;
  } 
  else {
    return `${playerSelect}`;
  }
} 

/* function scoreGame() {
  if (playRound == 'You win! rock beats scissors'||playRound == 'You win! scissors beats paper'
  ||playRound == `You win! scissors beats paper`) {
    playerScore++;
  }
  if (playRound == 'You lose! rock loses to paper'||playRound == 'You lose! scissors loses to rock'
  ||playRound == `You lose! paper loses to scissors`) {
    computerScore++;
  }
  } */


let playerScore = 0;
let computerScore = 0;

 function playGame() {
   for (let i = 1; i <= 5; i++) {
    alert(`ROUND ${i}`)
    let round = playRound(playerMove(), computerMove());
     alert(round);

     if (round == 'You win! rock beats scissors' || round == 'You win! paper beats rock' || round == 'You win! scissors beats paper') {
      playerScore++;
    }
    if (round == 'You lose! rock loses to paper' || round == 'You lose! paper loses to scissors' || round == 'You lose! scissors loses rock') {
      computerScore++;

    alert(`SCORE - You: ${playerScore}  -  Computer: ${computerScore}`);
  }
}
  if (playerScore < computerScore) {
    alert(`You lose :( ${computerScore} to ${playerScore}`)
  }
  else {
    alert(`You win :) ${playerScore} to ${computerScore}`)
  }
 }

 playGame();