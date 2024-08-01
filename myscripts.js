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
    }
    else if (rand === 1) {
        choice = 'PAPER';
    }
    else {
        choice = 'SCISSORS';
    }
    console.log('Computer choice:', choice); // Debugging line
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            console.log('Comparing choices:', humanChoice, computerChoice); // Debugging line

            if (humanChoice === computerChoice) {
                console.log('Tie! Play again!');
            }
            else if (
                (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
                (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
                (humanChoice === 'PAPER' && computerChoice === 'ROCK')
            ) {
                console.log('Human wins!');
                humanScore += 1;
                console.log('Human score: ' + humanScore);
            }
            else if (
                (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') ||
                (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') ||
                (computerChoice === 'PAPER' && humanChoice === 'ROCK')
            ) {
                console.log('Computer wins!');
                computerScore += 1;
                console.log('Computer score: ' + computerScore);
            }
            else {
                console.log('Invalid input!');
            }
        }

        playRound(humanChoice, computerChoice);
    }

    console.log('Final Scores:');
    console.log('Human: ' + humanScore);
    console.log('Computer: ' + computerScore);
}

playGame();
