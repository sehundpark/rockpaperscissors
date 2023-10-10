const getComputerChoice = () => {
    const randomInt = Math.floor(Math.random() * 3);
    const word = [
        "rock",
        "paper",
        "scissors"
    ];
    const roChamBo = word[randomInt];
    return roChamBo;
}

const playRound = (playerChoice, computerSelection) => {
    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
    // if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        return "Not valid.";
    } else if (playerChoice == computerSelection) {
        return "Tie.";
    } else if (
        (playerChoice == "rock" && computerSelection == "scissors") ||
        (playerChoice == "paper" && computerSelection == "rock") ||
        (playerChoice == "scissors" && computerSelection == "paper")
    ) {
        return "You win!";
    } else {
        return "You lose..";
    }
}

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

const displayScore = (message) => {
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = message;
}

const updateScore = () => {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
}

const announceWinner = () => {
    if (playerScore >= 5) {
        displayScore("You win! Click Reset to start over.");
        gameEnded - true;
    } else if (computerScore >= 5) {
        displayScore("You lose! Click reset to start over.");
        gameEnded = true;
    }
}

const game = (playerChoice) => {
    if (gameEnded) {
        return;
    }
    const computerChoice = getComputerChoice();
    const roundResults = playRound(playerChoice, computerChoice);
    if (roundResults === "You win!") {
        playerScore++;
        updateScore();
        displayScore(`You win, you chose ${playerChoice} against ${computerChoice}`);
    }
    else if (roundResults === "You lose..") {
        computerScore++;
        updateScore();
        displayScore(`You lose, you chose ${playerChoice} against ${computerChoice}`);
    }
    else if (roundResults === "Tie.") {
        displayScore(`You tied, you both chose ${playerChoice}`);
    } else {
        displayScore("Disqualified! Round doesn't count.")
    }
    announceWinner();
}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    gameEnded = false;
    displayScore("");
    updateScore();
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");

rockButton.addEventListener("click", () => {
    game("rock");
});

paperButton.addEventListener("click", () => {
    game("paper");
});

scissorsButton.addEventListener("click", () => {
    game("scissors");
});

resetButton.addEventListener("click", () => {
    resetGame();
});