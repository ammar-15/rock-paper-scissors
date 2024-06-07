
// Receiving random choices for the computer
function getComputerChoice() {
    const outcome = ["rock", "paper", "scissors"];
    const computerChoice = outcome[Math.floor(Math.random() * outcome.length)];
    console.log("Computer choice: "+computerChoice);
    return computerChoice;
}

// User Input, making sure the correct options are entered by user
function getHumanChoice() {
    const outcome = ["rock", "paper", "scissors"];
    let humanChoice = prompt("Press F12, and please enter 5 inputs of 'rock', 'paper' or 'scissors'").toLowerCase();
    while(!outcome.includes(humanChoice)){
        console.log("Error, please input rock, paper or scissors");
        humanChoice = prompt("Press F12, and please enter 5 inputs of 'rock', 'paper' or 'scissors'").toLowerCase();
    }
    console.log("Your choice: "+humanChoice);
    return humanChoice; 
}

// Initializing score
let humanScore = 0;
let computerScore = 0;

// Logic for the game
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

//Running the game for 5 rounds
function playGame(){

    for (let i = 0; i<5; i++){
        console.log("Round "+(i+1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(humanSelection, computerSelection);  
        console.log(round);
        console.log(humanScore, computerScore);
    }

    if (humanScore>computerScore){
        console.log("You win the game!");
    }
    else if (computerScore>humanScore){
        console.log("You lose the game!");
    }
    else {
        console.log("The game is a tie!")
    }
}
// Run the game
playGame();