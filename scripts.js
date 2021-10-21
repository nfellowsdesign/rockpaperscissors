//calling button elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const newGameBtn = document.querySelector(".new-game");

//calling score/round elements
const userScoreContainer = document.querySelector(".player-score-box");
const computerScoreContainer = document.querySelector(".computer-score-box");
const userScoreUi = document.querySelector(".player-score");
const computerScoreUi = document.querySelector(".computer-score");
const roundCounterContainer = document.querySelector(".round-marker");
const roundCounter = document.querySelector(".current-round");

//round history elements
const roundHistory = document.querySelector(".round-history");
const roundList = document.querySelector(".round-list");

//Win/Lose Screen
const scoreboardContainer = document.querySelector(".section1");
const scoreboard = document.querySelector(".scoreboard");
const winScreen = document.createElement("div");
const loseScreen = document.createElement('div');
const body = document.querySelector('body');
const endType = document.createElement('p');
const moveReplace = document.createElement('div');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');

//new game button
newGameBtn.addEventListener("click", function(e){
    location.reload();
})

//Play Button Events
rockBtn.addEventListener('click', function(e){
    let userSelection = 'rock';
    let computerSelection = computerPlay();
    let roundResult = playRound(userSelection,computerSelection);
    console.log(roundResult);
    game(roundResult);
});
   
paperBtn.addEventListener('click', function(e){
    let userSelection = 'paper';
    let computerSelection = computerPlay();
    let roundResult = playRound(userSelection,computerSelection);
    console.log(roundResult);
    game(roundResult);
});

scissorsBtn.addEventListener('click', function(e){
    let userSelection = 'scissors';
    let computerSelection = computerPlay();
    let roundResult = playRound(userSelection,computerSelection);
    console.log(roundResult);
    game(roundResult);
});

//initial states
let userScore = 0;
let computerScore = 0;
let roundTracker = 1;

//initial round tracker
roundCounter.textContent = roundTracker;
roundCounterContainer.appendChild(roundCounter);


//computer move function
function computerPlay(){
    let roll = (Math.floor(Math.random()*3)+1)
    switch (roll) {
        case 1: {
            return "rock";
            break;
        }
        case 2: {
           return "paper";
            break;
        }
        case 3: {
            return "scissors";
            break;
        }
    }
}

//individual round function
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
//round history array
let roundArray = []
console.log(roundArray)

function ArrayToList() {
    var result = "";
    roundArray.forEach(function (item) {
      result += "<li class='round'>" + "ROUND " + item.round + " " + item.result;
    });
    roundList.innerHTML=result;
  }
//game function
function game(roundResult){
    switch(roundResult) {
        case "win":{
            roundTracker++;
            roundCounter.textContent = roundTracker;
            roundCounterContainer.appendChild(roundCounter);
            userScore++;
            userScoreUi.textContent = userScore;
            userScoreContainer.appendChild(userScoreUi);
            roundArray.unshift({round: roundTracker, result: ": PLAYER WIN"})
            ArrayToList()
            roundHistory.appendChild(roundList);
            break;
        }
        case "lose":{
            roundTracker++;
            roundCounter.textContent = roundTracker;
            roundCounterContainer.appendChild(roundCounter);
            computerScore++;
            computerScoreUi.textContent = computerScore;
            computerScoreContainer.appendChild(computerScoreUi);
            roundArray.unshift({round: roundTracker, result: ": COMPUTER WIN"})
            ArrayToList()
            roundHistory.appendChild(roundList);
            break;
        }
        default:{
            roundTracker++;
            roundCounter.textContent = roundTracker;
            roundCounterContainer.appendChild(roundCounter);
            roundArray.unshift({round: roundTracker, result: ": TIE"})
            ArrayToList()
            roundHistory.appendChild(roundList);
        }
    }
        if (userScore >= 5){
            console.log("Game over: Player Wins");
            scoreboardContainer.removeChild(scoreboard);
            document.documentElement.style.setProperty('--accent-color', '#49e361');
            endType.textContent = "VICTORY";
            winScreen.classList.add("win-screen");
            winScreen.appendChild(endType);
            scoreboardContainer.appendChild(winScreen);
        } 
        if (computerScore >= 5){
            console.log("Game over: Player Loses");
            scoreboardContainer.removeChild(scoreboard);
            document.documentElement.style.setProperty('--accent-color', '#e53f3f');
            endType.textContent = "DEFEAT";
            loseScreen.classList.add("lose-screen");
            loseScreen.appendChild(endType);
            scoreboardContainer.appendChild(loseScreen);

            rockBtn.removeAttribute("id");
            paperBtn.removeAttribute("id");
            scissorsBtn.removeAttribute("id");


        }
    }