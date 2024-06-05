
// Receiving random choices for the computer
function getComputerChoice() {
    const outcome = ["rock", "paper", "scissors"];
    const computerChoice = outcome[Math.floor(Math.random() * outcome.length)];
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const result = document.querySelector(".result");
const outcome = document.querySelector(".outcome");



// Logic for the game
function playRound(humanSelection, computerSelection) {
    console.log(1, humanSelection, 2, computerSelection);

    if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        humanScore++;
        const p = document.createElement("p");
        p.innerText = ('You win! '+humanSelection+' beats '+computerSelection);
        result.appendChild(p);
    }
    else if (
        (humanSelection === "scissors" && computerSelection === "rock")||
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        const p = document.createElement("p");
        p.innerText = ('You lose! '+computerSelection +' beats '+humanSelection);
        result.appendChild(p);
    }
    else {
        const p = document.createElement("p");
        p.innerText = "Its a tie!";
        return result.appendChild(p);
    }
    
}

//Running the game 
function playGame(){

        rockButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const humanSelection = "rock";
            playRound(humanSelection, computerSelection);
        })
        
        paperButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const humanSelection = "paper";
            playRound(humanSelection, computerSelection);
        })
        
        scissorsButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const humanSelection = "scissors";
            playRound(humanSelection, computerSelection);
        })
        
    if (humanScore>computerScore){
        outcome.innerText = "You win the game!";
        outcome.append(outcome);
    }
    else if (computerScore>humanScore){
        outcome.innerText = "You lose the game!";
        outcome.append(outcome);

    }
    else {
        outcome.innerText = "The game is a tie!";
        outcome.append(outcome);

    }
}
//Run the game
playGame();
