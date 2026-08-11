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
         //else if((humanChoice.toLowerCase() && computerChoice === 'rock') || (humanChoice.toLowerCase() && computerChoice === 'paper') || (humanChoice.toLowerCase() && computerChoice === 'scissors')) {
            //console.log("A TIE! Nobody wins.")

        // * THE ISSUE WITH THE ELSE IF ABOVE, LEARNED BY TRIAL AND ERROR:
            // WHY IT BROKE:
            // humanChoice.toLowerCase() evaluates to a truthy string (true). So (true && computerChoice === 'rock')
            // evaluated to true whenever the computer picked rock, regardless of what the human chose (e.g. paper vs rock declared a tie).
            //
            // THE FIX(else if below):
            // Compare humanChoice and computerChoice directly with strict equality (===).

        }else if (humanChoice.toLowerCase() === computerChoice){
            console.log("A TIE! Nobody wins.")
        } else {
            console.log("YOU WIN! Nice Job :) ");
            humanScore += 1;
        }
    }
        // Part of step 5 but placed under for understanding / sequencing
            // something i learned, so bascially this will only call the function once and the logic is one i do my first prompt, it wil be the same answer for all 5
            // below is a better way to do it
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice(); this will be commented out

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}


playGame()

/* just me messing around 

try{
        let human_response = window.prompt("Choose you're action!");
    } catch(error) {
        console.log("We couldn't get the user to prompt")
    }
*/