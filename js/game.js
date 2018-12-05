const rock        = document.querySelector('#rock');
const paper       = document.querySelector('#paper');
const scissors    = document.querySelector('#scissors');
const playerScore = document.querySelector('.player-score');
const compScore   = document.querySelector('.comp-score');
const score       = [0, 0];
let round         = 1;
const roundCount  = document.querySelector('.round');
const weapons     = ['rock', 'paper', 'scissors'];
const compChoice  = () => {
    let choice = weapons[Math.floor(Math.random() * weapons.length)];
    return choice;
}

rock.addEventListener('click', () => {playRound('rock', compChoice());});
paper.addEventListener('click', () => {playRound('paper', compChoice());});
scissors.addEventListener('click', () => {playRound('scissors', compChoice());});

function playRound(playerChoice, compChoice) {                
    switch (playerChoice) {
        case 'rock':
            if (compChoice === 'paper') {
                console.log(`You lose!  ${compChoice} beats ${playerChoice}`);
                score[1]++;
                //apply textContent that contains score;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            } else if (compChoice === 'scissors') {
                console.log(`You win! ${playerChoice} beats ${compChoice}`);
                score[0]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            } else {
                console.log('Tie!');
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            break;
        case 'paper':
            if (compChoice === 'scissors') {
                console.log(`You lose! ${compChoice} beats ${playerChoice}`);
                score[1]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            } else if (compChoice === 'rock') {
                console.log(`You win! ${playerChoice} beats ${compChoice}`);
                score[0]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            } else {
                console.log('Tie!');
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            break;
        case 'scissors':
            if (compChoice === 'rock') {
                console.log(`You lose! ${compChoice} beats ${playerChoice}` );
                score[1]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            } else if (compChoice === 'paper') {
                console.log(`You win! ${playerChoice} beats ${compChoice}`);
                score[0]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            } else {
                console.log('Tie!');
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            break;
    }
    round++;
    roundCount.textContent = `${round}`;
}

// function game() {

//     playRound();
//     while (score[0] <=1 && score[1] <= 1) {
//         playRound();
//     }
//     console.log(score);
// }