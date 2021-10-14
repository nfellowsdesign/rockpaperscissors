
//username input

//let username = prompt("Enter your Name")

//game aspects
function computerPlay(){
    let roll = (Math.floor(Math.random()*3)+1)
    switch (roll) {
        case 1: {
            return "rock";
           // console.log("Computer Move:"+computerSelection);
        break;
        }
        case 2: {
           return "paper";
           //console.log("Computer Move:"+computerSelection);
        break;
        }
        case 3: {
            return "scissors";
           //console.log("Computer Move:"+computerSelection);
        break;
        }
    }
}
function userPlay(){
    let userEntry = prompt("Enter your Move").toLowerCase();
    if (userEntry === "rock"){
        return userEntry;
    }else if (userEntry === "paper"){
        return userEntry;
    }else if (userEntry === "scissors"){
        return userEntry;
    }else{
        return "Not a valid move";
    }
}
function playRound(userSelection, computerSelection) {


}


function game(){
    for (let i = 0; i < 5; i++){
        playRound()
    }

    


}  


let computerSelection = computerPlay();
let userSelection = userPlay();

console.log("User Move:"+userSelection)
console.log("Computer Move:"+computerSelection)

//scorekeeping
