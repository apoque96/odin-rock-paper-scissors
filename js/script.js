const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScoreUi = document.querySelector("#playerScore");
const computerScoreUi = document.querySelector("#computerScore");
const playerTxt = document.querySelector("#player");
const computerTxt = document.querySelector("#computer");

paperBtn.addEventListener('click', function(){round("paper")});
rockBtn.addEventListener('click', function(){round("rock")});
scissorsBtn.addEventListener('click', function(){round("scissors")});

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        default:
            return "scissors";
            break;
    }
}

// Returns the result of the round. True means that the player wins, false the computer wins
function round(playerSelection){
    let computerSelection = getComputerChoice();

    let playerWins = false;

    if(playerSelection == computerSelection){
        result.textContent = "Tie!!! Re-playing round";
        return round();
    }

    switch (playerSelection){
        case "paper":
            computerSelection == "rock" ? playerWins = true: playerWins = false;
            break;
        case "rock":
            computerSelection == "scissors" ? playerWins = true: playerWins = false;
            break;
        case "scissors":
            computerSelection == "paper" ? playerWins = true: playerWins = false;
            break;  
    }

    result.textContent = "The computer choose " + computerSelection +
                            ". You " + (playerWins ? "win": "loose");
    playerTxt.textContent = "Player: " + playerSelection;
    computerTxt.textContent = "Computer: " + computerSelection;
    updateScore(playerWins);
}

let playerScore = 0;
let computerScore = 0;
function updateScore(playerWins){
    playerWins ? playerScore++: computerScore++;
    playerScoreUi.textContent = "Player: " + playerScore;
    computerScoreUi.textContent = "Computer: " + computerScore;
    if(playerScore == 5){
        result.textContent = "You won 5 games. You WIN!!!!";
        restartGame();
    }
    if(computerScore == 5){
        result.textContent = "The computer won 5 games. You loose :C";
        restartGame();
    }
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
}