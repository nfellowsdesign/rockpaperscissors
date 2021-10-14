
//user name input
let username = prompt("Enter your Name")

//computer move
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

//user move
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

//game round
function playRound(userSelection, computerSelection) {
    //Results if user picks rock
    if (userSelection == "rock"){
        //3 bot options
    }
    //Results if user picks paper
    else if (userSelection == "paper"){
        //3 bot options
    }
    //Results if user picks scissors
    else if (userSelection == "scissors"){
        //3 bot options
    }
}

//full game function
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
