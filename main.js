let counterPlayer = document.getElementById("counterPlayer");
let counterComputer = document.getElementById("counterComputer");

let playerScore = 0;
let computerScore = 0;
let round = 0;
const winningScore = 5;

let playerSelection = "";
let computerSelection = "";

let choice = document.querySelectorAll(".symbol");
choice.forEach((item) => {
    item.addEventListener("click", myFunction);
});

const resetButton = document.getElementById("reset_button");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    counterPlayer.textContent = "0";
    counterComputer.textContent = "0";
    playerScore = 0;
    computerScore = 0;
    round = 0;
    resetSymbols();
    resetResult();
    disableSymbols(); // Eventlistener entfernen
    enableSymbols(); // Eventlistener wieder hinzufügen
}

function markSelectedSymbols() {
    const playerSymbol = document.getElementById(`player${playerSelection}`);
    playerSymbol.style.color = "green";
    const computerSymbol = document.getElementById(`computer${computerSelection}`);
    computerSymbol.style.color = "red";
}

function resetResult() {
    document.querySelector(".resultwin").textContent = "";
    document.querySelector(".resultlose").textContent = "";
}

function myFunction(event) {
    if (event.target.id === "playerScissor") {
        playerSelection = "Scissor";
        console.log("Es wurde auf Schere geklickt");
    } else if (event.target.id === "playerFist") {
        playerSelection = "Fist";
        console.log("Es wurde auf Faust geklickt");
    } else {
        playerSelection = "Paper";
        console.log("Es wurde auf Papier geklickt");
    }
    
    resetSymbols(); // Reset der Symbole nach jedem Zug
    playRound();
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let hand = "";
    if (random === 0) {
        hand = "Scissor";
    } else if (random === 1) {
        hand = "Fist";
    } else {
        hand = "Paper";
    }
    return hand;
}

function resetSymbols() {
    choice.forEach((item) => {
        item.style.color = "";
    });
}

function disableSymbols() {
    choice.forEach((item) => {
        item.removeEventListener("click", myFunction);
    });
}

function enableSymbols() {
    choice.forEach((item) => {
        item.addEventListener("click", myFunction);
    });
}

function playRound() {
    computerSelection = computerPlay();

    if (
        (playerSelection === "Fist" && computerSelection === "Scissor") ||
        (playerSelection === "Scissor" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Fist")
    ) {
        playerScore++;
        round++;
        counterPlayer.textContent = playerScore;
        markSelectedSymbols();
        document.querySelector(".resultwin").textContent = "Gewonnen!";
    } else if (
        (playerSelection === "Scissor" && computerSelection === "Fist") ||
        (playerSelection === "Paper" && computerSelection === "Scissor") ||
        (playerSelection === "Fist" && computerSelection === "Paper")
    ) {
        computerScore++;
        round++;
        counterComputer.textContent = computerScore;
        markSelectedSymbols();
        document.querySelector(".resultlose").textContent = "Verloren!";
    } else {
        round++;
        markSelectedSymbols();
        document.querySelector(".resultwin").textContent = "Unentschieden!";
        document.querySelector(".resultlose").textContent = "Unentschieden!";
    }

    if (playerScore === winningScore) {
        document.querySelector(".resultwin").textContent = "Du hast das Spiel gewonnen!";
        disableSymbols();
    } else if (computerScore === winningScore) {
        document.querySelector(".resultlose").textContent = "Der Computer hat das Spiel gewonnen!";
        disableSymbols();
    }

    if (round === winningScore) {
        resetSymbols();
    }
}
