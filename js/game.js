// document.addEventListener('DOMContentLoaded', game);
const rock       = document.querySelector('#rock');
const paper      = document.querySelector('#paper');
const scissors   = document.querySelector('#scissors');
const score      = [0, 0];
const weapons    = ['rock', 'paper', 'scissors'];
const randomNum  = Math.floor(Math.random() * weapons.length);
const compChoice = weapons[randomNum];

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// rock.addEventListener('click', playRound('rock', compChoice));
// paper.addEventListener('click', playRound('paper', compChoice));
// scissors.addEventListener('click', playRound('scissors', compChoice));

rock.addEventListener('click', playRound);

function playRound(playerChoice, compChoice) {                
    switch (playerChoice) {
        case 'rock':
            if (compChoice === 'paper') {
                console.log(`You lose!  ${compChoice} beats ${playerChoice}`);
                score[1]++;
            } else if (compChoice === 'scissors') {
                console.log(`You win! ${playerChoice} beats ${compChoice}`);
                score[0]++;
            } else {
                console.log('Tie!');
            }
            break;
        case 'paper':
            if (compChoice === 'scissors') {
                console.log(`You lose! ${compChoice} beats ${playerChoice}`);
                score[1]++;
            } else if (compChoice === 'rock') {
                console.log(`You win! ${playerChoice} beats ${compChoice}`);
                score[0]++;
            } else {
                console.log('Tie!');
            }
            break;
        case 'scissors':
            if (compChoice === 'rock') {
                console.log(`You lose! ${compChoice} beats ${playerChoice}` );
                score[1]++;
            } else if (compChoice === 'paper') {
                console.log(`You win! ${playerChoice} beats ${compChoice}`);
                score[0]++;
            } else {
                console.log('Tie!');
            }
            break;
    }
}

// function game() {

//     playRound();
//     while (score[0] <=1 && score[1] <= 1) {
//         playRound();
//     }
//     console.log(score);
// }