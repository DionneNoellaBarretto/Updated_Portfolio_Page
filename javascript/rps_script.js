
const RoundResult = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e){
    //setup player's selection
    let playerSelection = e.target.innerText;
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    let computerSelection = Math.random();

    //if computerSelection is less than .34, computer selects Rock
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    
    //setup a function to compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);

    //output scores to the DOM
    if (result === 'Player'){
        result += ' wins!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!'
    }

    //output score into Score DIV
    score.innerHTML = 'Player: [ ' + winnerScores[0]+ ' ] Computer: [ ' + winnerScores[1] + ' ]';

    //output player and computer's selections
    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage){
    RoundResult.innerHTML = selectionMessage;
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}

