// Step 2: Write the logic to get the computer choice

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
    
    // console.log(result)
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let response = prompt("Choose you're action!")
    // console.log(response);
    return response;
}


// Step 4: Declare the players score variables
// let humanScore = 0;
// let computerScore = 0;


// Step 5: Write the logic to play a single round
// function playRound(humanChoice, computerChoice) {
//     // LOSER OPTIONS 
//     console.log(`Human parameter is ${humanChoice}`)
//     console.log(`Computer parameter is ${computerChoice}`)
//     if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
//         console.log("YOU LOSE! Paper beats rock :(");
//         computerScore += 1;
//     } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
//         console.log("YOU LOSE! Scissors beats paper :(");
//         computerScore += 1;
//     } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock'){
//         console.log('YOU LOSE! Rock beats scissors :)');
//         computerScore += 1;
//     } else if((humanChoice.toLowerCase() && computerChoice === 'rock') || (humanChoice.toLowerCase() && computerChoice === 'paper') || (humanChoice.toLowerCase() && computerChoice === 'scissors')) {
//         console.log("A TIE! Nobody wins.")
//     } else {
//         console.log("YOU WIN! Nice Job :) ");
//         humanScore += 1;
//     }
// }


// playRound(humanSelection, computerSelection)

// Step 6: Write the logic to play the entire game

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
        // LOSER OPTIONS 
        if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
            console.log("YOU LOSE! Paper beats rock :(");
            computerScore += 1;
        } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
            console.log("YOU LOSE! Scissors beats paper :(");
            computerScore += 1;
        } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock'){
            console.log('YOU LOSE! Rock beats scissors :)');
            computerScore += 1;

        }else if (humanChoice.toLowerCase() === computerChoice){
            console.log("A TIE! Nobody wins.")
        } else {
            console.log("YOU WIN! Nice Job :) ");
            humanScore += 1;
        }
    }

    // rock  query selector and event listener
    const rock = document.querySelector(".rock")
    rock.addEventListener('click', playRound)

    // paper query selector and event listener
    const paper = document.querySelector(".paper")
    paper.addEventListener('click', playRound)

    // scissors query selector and event listener
    const scissors = document.querySelector(".scissors")
    scissors.addEventListener('click', playRound)

}


// playGame()