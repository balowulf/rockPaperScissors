/********** Variables **********/
const rock        = document.querySelector('#rock');
const paper       = document.querySelector('#paper');
const scissors    = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const compScore   = document.querySelector('#comp-score');
const score       = [0, 0];
let round         = 1;
const roundCount  = document.querySelector('#round');
const weapons     = ['rock', 'paper', 'scissors'];
const message     = document.querySelector('.message');
const endGameBtn  = document.querySelector('button');
const compChoice  = () => {
  let choice = weapons[Math.floor(Math.random() * weapons.length)];
  return choice;
}

endGameBtn.style.display = 'none';

/********** Event Listeners **********/

rock.addEventListener('click', () => playRound('rock', compChoice()));
paper.addEventListener('click', () => playRound('paper', compChoice()));
scissors.addEventListener('click', () => playRound('scissors', compChoice()));
endGameBtn.addEventListener('click', clearAll);

/********** Functions **********/

function playRound(playerChoice, compChoice) {
  switch (playerChoice) {
    case 'rock':
      if (compChoice === 'paper') {
        message.textContent = `You lose! ${compChoice} beats ${playerChoice}`;
        score[0]++;
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      } else if (compChoice === 'scissors') {
        message.textContent = `You win! ${playerChoice} beats ${compChoice}`;
        score[1]++;
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      } else {
        message.textContent = 'Tie!';
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      }
      break;
    case 'paper':
      if (compChoice === 'scissors') {
        message.textContent = `You lose! ${compChoice} beats ${playerChoice}`;
        score[0]++;
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      } else if (compChoice === 'rock') {
        message.textContent = `You win! ${playerChoice} beats ${compChoice}`;
        score[1]++;
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      } else {
        message.textContent = 'Tie!';
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      }
      break;
    case 'scissors':
      if (compChoice === 'rock') {
        message.textContent = `You lose! ${compChoice} beats ${playerChoice}` ;
        score[0]++;
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      } else if (compChoice === 'paper') {
        message.textContent = `You win! ${playerChoice} beats ${compChoice}`;
        score[1]++;
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      } else {
        message.textContent = 'Tie!';
        playerScore.textContent = `${score[1]}`;
        compScore.textContent = `${score[0]}`;
      }
      break;
  }
  round++;
  roundCount.textContent = `${round}`;
  if (round === 5) {
    endGame();
  }
}

function endGame() {
  if (score[1] > score[0]) {
    message.textContent = 'Game Over! You win!';
  } else if (score[0] > score[1]) {
    message.textContent = 'Game Over! You lose!';
  } else if (score[0] === score[1]) {
    message.textContent = 'Game Over!  It\'s a tie!';
  }
  endGameBtn.style.display = 'block';
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function clearAll() {
  score[1] = 0;
  score[0] = 0;
  round = 1;
  message.textContent = '5 Rounds -- Choose Your Weapon!';
  playerScore.textContent = `${score[1]}`;
  compScore.textContent = `${score[0]}`;
  roundCount.textContent = `${round}`;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  endGameBtn.style.display = 'none';
}