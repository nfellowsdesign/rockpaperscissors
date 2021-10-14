
//username input

//let username = prompt("Enter your Name")

//game aspects
function computerPlay(){
    let roll = (Math.floor(Math.random()*3)+1)
    console.log(roll)
    switch (roll) {
        case 1: {
            let computerSelection = "rock";
            console.log(computerSelection);
        break;
        }
        case 2: {
           let computerSelection = "paper";
           console.log(computerSelection);
        break;
        }
        case 3: {
           let computerSelection = "scissors";
           console.log(computerSelection);
        break;
        }
    }
}
computerPlay();
function userPlay(){
    let userSelection = prompt("Enter your Move");
}

userPlay();

function playRound(playerSelection,computerSelection) { 

}

playRound()

//scorekeeping
