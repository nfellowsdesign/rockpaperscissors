//user name input
//let username = prompt("Enter your Name")

//computer move function
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

//user move function
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

//game round function
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
    //initial states
    let userScore = 0;
    let computerScore = 0;
    let end = 0;
    let roundTracker = 1;
    console.log("Round:"+roundTracker);

    //round loop
    do{
        //user/computer moves
        let computerSelection = computerPlay();
        let userSelection = userPlay();
        //log moves
        console.log("User Move:"+userSelection);
        console.log("Computer Move:"+computerSelection);
        //log result of round
        let roundResult = playRound(userSelection,computerSelection);
        //add round result to game tracking
        switch(roundResult) {
            case "win":{
                userScore++;
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
        //log game tracking
            console.log(userScore);
            console.log(computerScore);
        //endstate
            if (userScore == 5){
                end = 1;
                console.log("Game over: "+username+" Wins");
                } 
            if (computerScore == 5){
                end = 1;
                console.log("Game over: "+username+" Loses");
                } 
        //Round Tracker
            roundTracker++;
            console.log("Round:"+roundTracker);
    } while (end != 1);
}  

game();
