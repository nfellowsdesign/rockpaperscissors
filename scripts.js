
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
        if(computerSelection == "rock"){
            return "tie";
        } else if (computerSelection == "paper"){
            return "lose";
        } else (computerSelection == "scissors")
            return "win";
    }
    //Results if user picks paper
    else if (userSelection == "paper"){
        //3 bot options
        if(computerSelection == "rock"){
            return "win";
        } else if (computerSelection == "paper"){
            return "tie";
        } else (computerSelection == "scissors")
            return "lose";
    }
    //Results if user picks scissors
    else if (userSelection == "scissors"){
        //3 bot options
        if(computerSelection == "rock"){
            return "lose";
        } else if (computerSelection == "paper"){
            return "win";
        } else (computerSelection == "scissors")
            return "tie";
    }
}

//full game function
function game(){

    let playerScore = 0;
    let computerScore = 0;
    let end = 0;
    let roundTracker = 1;
    console.log("Round:"+roundTracker);
    //5 round loop
    do{
        let computerSelection = computerPlay();
        let userSelection = userPlay();
        
        console.log("User Move:"+userSelection);
        console.log("Computer Move:"+computerSelection);
        
        let roundResult = playRound(userSelection,computerSelection);
    
        switch(roundResult) {
            case "win":{
                playerScore++;
                console.log("Round was won");
                break;
            }
            case "lose":{
                computerScore++;
                console.log("Round was lost");
                break;
            }
            default:{
                console.log("Round was tied");
            }
        }
            console.log(playerScore);
            console.log(computerScore);

            if (playerScore == 5){
                end = 1;
                console.log("Game over: You Win");
                } 
            if (computerScore == 5){
                end = 1;
                console.log("Game over: You Lose");
                } 
            roundTracker++;
            console.log("Round:"+roundTracker);
        } while (end != 1)
    }  

game();
//scorekeeping
