
function getCoumputerChoice() {
    const outcome = ["rock", "paper", "scissors"];
    const computerChoice = outcome[Math.floor(Math.random() * outcome.length)];
    console.log("Computer choice: "+computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    const outcome = ["rock", "paper", "scissors"];
    let humanChoice = prompt("Please enter rock, paper or scissors").toLowerCase();
    while(!outcome.includes(humanChoice)){
        console.log("Error, please input rock, paper or scissors");
        humanChoice = prompt("Please enter rock, paper or scissors").toLowerCase();
    }
    console.log("Your choice: "+humanChoice);
    return humanChoice; 
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    let winResult = "You win! " + humanSelection + " beats " + computerSelection;
    let loseResult = "You Lose! " + computerSelection + " beats " + humanSelection;

    if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        humanScore++;
        return winResult;
    }
    else if (
        (humanSelection === "scissors" && computerSelection === "rock")||
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        return loseResult;
    }

    else {
        return "its a tie!";
    }

}


function playGame(){

    for (let i = 0; i<5; i++){
        console.log("Round "+(i+1));
        const humanSelection = getHumanChoice();
        const computerSelection = getCoumputerChoice();
        const round = playRound(humanSelection, computerSelection);  
        console.log(round);
    }

    if (humanScore>computerScore){
        console.log("You win the game!");
    }
    else if (computerScore>humanScore){
        console.log("You lose the game!");
    }
    else {
        console.log("Its a tie!")
    }
}

playGame();