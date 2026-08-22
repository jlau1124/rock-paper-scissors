function getComputerChoice() {
    const action = Math.floor(Math.random() * 3)

    let result;

    switch (action) {
        case 0: 
            result = "rock";
            break;
        case 1: 
            result = "paper";
            break;
        case 2: 
            result = "scissors";
            break;
    }

    return result;
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const resultsDiv = document.querySelector(".round-outcome")
    const score = document.querySelector(".score-board")
    const winner = document.querySelector(".winner-announcement")

    // A quick helper to lock all 3 buttons
    function disableButtons() {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    function playRound(humanChoice, computerChoice) {
        // LOSER OPTIONS 
        if (humanChoice === "rock" && computerChoice === 'paper') {
            resultsDiv.textContent = "Result: YOU LOSE! Paper beats rock :(";
            computerScore += 1;
        } else if (humanChoice === "paper" && computerChoice === 'scissors') {
            resultsDiv.textContent = " Result: YOU LOSE! Scissors beats paper :(";
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === 'rock'){
            resultsDiv.textContent = " Result: YOU LOSE! Rock beats scissors :)";
            computerScore += 1;
        }else if (humanChoice === computerChoice){
            resultsDiv.textContent = "Result: A TIE! Nobody wins.";
        } else {
            resultsDiv.textContent = "Result: YOU WIN! Nice Job :) ";
            humanScore += 1;
        }

        score.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`

        if (humanScore === 5) {
            winner.textContent = "🎉 Game over! You won the match!"
            disableButtons();
        } else if (computerScore === 5) {
            winner.textContent = "💻 Game over! The Computer reached 5 points first!"
            disableButtons();
        }
    }


    // rock  query selector and event listener
    const rock = document.querySelector(".rock")
    rock.addEventListener('click', () => {
        playRound("rock", getComputerChoice())
    })

    // paper query selector and event listener
    const paper = document.querySelector(".paper")
    paper.addEventListener('click', () => {
        playRound("paper", getComputerChoice())
    })

    // scissors query selector and event listener
    const scissors = document.querySelector(".scissors")
    scissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice())
    })

    // link helped with event listener logic, the arrow function: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

}


playGame()