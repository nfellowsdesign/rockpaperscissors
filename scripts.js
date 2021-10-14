
//username input

//let username = prompt("Enter your Name")

//game aspects
function computerPlay(){
    let roll = (Math.floor(Math.random()*3)+1)
    switch (roll) {
        case 1: {
            let computerSelection = "rock";
            console.log("Computer Move:"+computerSelection);
        break;
        }
        case 2: {
           let computerSelection = "paper";
           console.log("Computer Move:"+computerSelection);
        break;
        }
        case 3: {
           let computerSelection = "scissors";
           console.log("Computer Move:"+computerSelection);
        break;
        }
    }
}
computerPlay();

function userPlay(){
    let userSelection = prompt("Enter your Move").toLowerCase();
    console.log("User Move:"+userSelection)
}

userPlay();

function playRound(playerSelection,computerSelection) { 

}

playRound()

//scorekeeping
