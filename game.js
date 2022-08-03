
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    //console.log("Num: " + num);
    if(num == 0){
        return "Rock";
    } else if (num == 1){
        return "Paper";
    } else {
        return "Scissor";
    }
}

//console.log(getComputerChoice());

function playRound(playSelection, computerSelection){
    let pl = playSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let r = "rock", p = "paper", s = "scissor";
    var message;

    if(pl == r){
        if(c == p){
            message = 2;
        } else if (c == s){
            message = 1;
        } else {
            message = 0;
        }
    } else if (pl == p){
        if(c == r){
            message = 1;
        } else if (c == s){
            message = 2;
        } else {
            message = 0;
        }
    } else {
        if(c == r){
            message = 2;
        } else if (c == p){
            message = 1;
        } else {
            message = 0;
        }
    }
    return message;
}

//console.log(playRound("scissor", "rock"));


function game(numRounds = 5){
    var playerWins = 0;
    var compWins = 0;
    for(let i = 0; i < numRounds; i++){
        let userChoice = prompt("Which item would you like to pick?");
        let compChoice = getComputerChoice();
        let outcome = (playRound(userChoice, compChoice));
        if(outcome == 1){
            playerWins++;
            console.log("You won this round! " + userChoice + " beats " + compChoice);
        } else if (outcome == 2){
            compWins++;
            console.log("You lost this round!" + compChoice + " beats " + userChoice);
        } else {
            console.log("It's a Tie!");
        }
    }

    console.log("---------------------------------");
    if(playerWins > compWins){
        console.log("YOU WON THE GAME!");
    } else {
        console.log("YOU LOST THE GAME!");
    }
}

game();