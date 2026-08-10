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
    
    // console.log(result)
}

// Call function area
// getComputerChoice()