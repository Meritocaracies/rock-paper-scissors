function getHumanChoice() {
    let choice = prompt('Rock, paper, or scissors?').toUpperCase();
    console.log('Human choice:', choice); // Debugging line
    return choice;
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice;
    if (rand === 0) {
        choice = 'ROCK';
        document.getElementById("resultText").innerHTML += 'Computer choice: ROCK <br>'; // Debugging line

    }
    else if (rand === 1) {
        choice = 'PAPER';
        document.getElementById("resultText").innerHTML += 'Computer choice: PAPER <br>'; // Debugging line

    }
    else {
        choice = 'SCISSORS';
        document.getElementById("resultText").innerHTML += 'Computer choice: SCISSORS <br>'; // Debugging line

    }
    return choice;
}
let humanScore = 0;
let computerScore = 0;
function playGame(choiceFunc, choice) {
    document.getElementById("resultText").innerHTML = '';
    
        let humanChoice = choice.toUpperCase();
        let computerChoice = getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            //document.getElementById("resultText").innerHTML += 'Comparing choices:', humanChoice, computerChoice; // Debugging line

            if (humanChoice === computerChoice) {
                document.getElementById("resultText").innerHTML += 'Tie! Play again!';
            }
            else if (
                (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
                (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
                (humanChoice === 'PAPER' && computerChoice === 'ROCK')
            ) {
                document.getElementById("resultText").innerHTML += 'Human wins! <br>';
                humanScore += 1;
                if (humanScore==5){
                    document.getElementById("resultText").innerHTML = '';
                    document.getElementById("resultText").innerHTML += 'Game over! Human Wins!';
                    humanScore = 0;
                    computerScore = 0;
                }            }
            else if (
                (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') ||
                (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') ||
                (computerChoice === 'PAPER' && humanChoice === 'ROCK')
            ) {
                document.getElementById("resultText").innerHTML +='Computer wins!<br>';
                computerScore += 1;
                if (computerScore==5){
                    document.getElementById("resultText").innerHTML = '';
                    document.getElementById("resultText").innerHTML += 'Game over! Computer Wins!';
                    humanScore = 0;
                    computerScore = 0;
                } 
            }
            else {
                console.log('Invalid input!');
            }
        }

        playRound(humanChoice, computerChoice);
    }

//playGame();
const rockElement = document.getElementById("rock");
rockElement.addEventListener("click", clickRock);

const paperElement = document.getElementById("paper");
paperElement.addEventListener("click", clickPaper);

const scissorsElement = document.getElementById("scissors");
scissorsElement.addEventListener("click", clickScissors);

function clickRock() {
    rockElement.style.backgroundColor = '#005f5f';
    paperElement.style.backgroundColor =  '#008cba';
    scissorsElement.style.backgroundColor = '#008cba';
    playGame(rock,"rock");
}

function clickPaper() {
    paperElement.style.backgroundColor =  '#005f5f';
    scissorsElement.style.backgroundColor = '#008cba';
    rockElement.style.backgroundColor = '#008cba';

    playGame(paper,"paper");
}

function clickScissors() {
    paperElement.style.backgroundColor =  '#008cba';
    scissorsElement.style.backgroundColor = '#005f5f';
    rockElement.style.backgroundColor = '#008cba';

    playGame(scissors,"scissors");
}