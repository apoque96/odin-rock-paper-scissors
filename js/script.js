function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "PAPER";
            break;
        case 1:
            return "ROCK";
            break;
        default:
            return "SCISSORS";
            break;
    }
}

function getPlayerChoice(){
    return prompt("Choose paper, rock or scissors");
}
// Returns the result of the round. True means that the player wins, false the computer wins
function round(){
    let playerSelection = getPlayerChoice();
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();

    let playerWins = false;

    if(playerSelection == computerSelection){
        alert("Tie!!! Re-playing round");
        return round();
    }

    switch (playerSelection){
        case "PAPER":
            computerSelection == "ROCK" ? playerWins = true: playerWins = false;
            break;
        case "ROCK":
            computerSelection == "SCISSORS" ? playerWins = true: playerWins = false;
            break;
        case "SCISSORS":
            computerSelection == "PAPER" ? playerWins = true: playerWins = false;
            break;
        default:
            alert("Invalid input: please choose paper, rock or scissors");
            return round();
            break;   
    }

    alert("Player choice: " + playerSelection + ". Computer choice: " + 
           computerSelection + ". You " + (playerWins ? "win": "loose"));
    return playerWins;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    alert("Playing BO5. Win three rounds to win the game!");

    for(let i = 0; i < 5; i++){
        round() ? playerScore++: computerScore++;
        alert("Score: Player has won " + playerScore + " rounds. Computer has won " + computerScore + " rounds.");
        if(playerScore >= 3){
            alert("You won 3 rounds. You win the game!!!");
            break;
        }
        if(computerScore >= 3){
            alert("The computer won 3 rounds. You loose :C");
            break;
        }
    }
}

game();