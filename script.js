function computerSelection(){
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    console.log(`Computer chose ${choice}`);
    return choice;
}

function playerSelection(){
    let choice = prompt('Type your choice: ');
    choice = choice.toUpperCase();
    console.log(`Player chose ${choice}`);
    return choice;
}

// let comp_choice = computerSelection();
// let player_choice = playerSelection();

function playRound(comp_choice, player_choice){
    if (comp_choice === 'rock' && player_choice === 'ROCK'){
        console.log('Its a TIE!');
    } 
    else if (comp_choice === 'rock' && player_choice === 'SCISSORS'){
        console.log('You LOSE! Rock beats Scissors');
    }
    else if (comp_choice === 'rock' && player_choice === 'PAPER'){
        console.log('You WIN! Paper beats Rock')
        return true;
    }

    else if (comp_choice === 'paper' && player_choice === 'PAPER'){
        console.log('Its a TIE!');
    } 
    else if (comp_choice === 'paper' && player_choice === 'ROCK'){
        console.log('You LOSE! Paper beats Rock');
    }
    else if (comp_choice === 'paper' && player_choice === 'SCISSORS'){
        console.log('You WIN! Paper beats Scissors')
        return true;

    }

    else if (comp_choice === 'scissors' && player_choice === 'SCISSORS'){
        console.log('Its a TIE!');
    } 
    else if (comp_choice === 'scissors' && player_choice === 'PAPER'){
        console.log('You LOSE! Scissors beats Paper');
    }
    else if (comp_choice === 'scissors' && player_choice === 'ROCK'){
        console.log('You WIN! Rock beats Scissors')
        return true;

    }

    else{
        console.log('INVALID CHOICE!')
        return false;
    }
    
}

let counter = 0;
for (let i=1; i<=5; i++){
    console.log(`Round ${i}: `)
    let comp_choice = computerSelection();
    let player_choice = playerSelection();

    if(playRound(comp_choice, player_choice) === false){
        break;
    }

    if (playRound(comp_choice, player_choice) === true){
        counter = counter+1;
    }
    else {
        counter=counter;
    }
}

if (counter > 2){
    console.log(`RESULT: (${counter}/5): Player WINS the match!`);
}
else {
    console.log(`RESULT: (${counter}/5): Player LOST the match!`);
}