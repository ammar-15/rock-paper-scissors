let humanScore = 0;
let computerScore = 0;

const div = document.querySelector("div")
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const outcomeButton = document.querySelector(".outcome");

// Receiving random choices for the computer
function getComputerChoice() {
    const outcome = ["rock", "paper", "scissors"];
    const computerChoice = outcome[Math.floor(Math.random() * outcome.length)];
    return computerChoice;
}

// Logic for the game
function playRound(humanSelection, computerSelection) {
    console.log(humanSelection, computerSelection);

    if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        humanScore++;
        console.log(humanScore, computerScore);
        score.textContent = ("Your Score: "+humanScore+"; Computer Score: "+computerScore)
        const p = document.createElement("p");
        p.textContent = ('You win! '+humanSelection+' beats '+computerSelection);
        div.appendChild(score);
        result.appendChild(p);
    }
    else if (
        (humanSelection === "scissors" && computerSelection === "rock")||
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        console.log(humanScore, computerScore);
        score.textContent = ("Your score: "+humanScore+"; Computer Score: "+computerScore)
        const p = document.createElement("p");
        p.textContent = ('You lose! '+computerSelection +' beats '+humanSelection);
        div.appendChild(score);
        result.appendChild(p);
    }
    else {
        const p = document.createElement("p");
        p.textContent = "Its a tie!";
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

        function resultDisplay() {

            if (humanScore>computerScore){
                result.textContent = "You win the game!";
                score.append(result);
            }
            else if (computerScore>humanScore){
                result.textContent = "You lose the game!";
                score.append(result);
    
            }
            else {
                result.textContent = "The game is a tie!";
                score.append(result);
    
            }
        }
        outcomeButton.addEventListener('click', () => {
            resultDisplay()
        })

        
        
    
}
//Run the game
playGame();
