const user_display_container = document.querySelector('.user-choice')
const computer_display_container = document.querySelector('.computer-choice')
const result_container = document.querySelector('.result')
const buttons = document.querySelectorAll('.button')

let computerChoice
let playerChoice
let result
result_options = ['Its a TIE!', 'You WIN!', 'You LOSE!']

function computerSelection() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];
  console.log(`Computer chose ${choice}`);
  return choice;
}
function main(){
  buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id
    user_display_container.innerHTML = `Player Chose: ${playerChoice.toUpperCase(playerChoice)}`
    computerChoice = computerSelection()
    computer_display_container.innerHTML = `Computer Chose: ${computerChoice.toUpperCase(computerChoice)}`
    result = ''
    getResult()

  }) 
  );
}

function getResult(){
  if (playerChoice === computerChoice){
    result = result_options[0]
  }

  if (playerChoice === 'rock' && computerChoice === 'paper') result = result_options[2] 
  if (playerChoice === 'rock' && computerChoice === 'scissors') result = result_options[1] 

  if (playerChoice === 'paper' && computerChoice === 'rock') result = result_options[1] 
  if (playerChoice === 'paper' && computerChoice === 'scissors') result = result_options[2] 

  if (playerChoice === 'scissors' && computerChoice === 'paper') result = result_options[1] 
  if (playerChoice === 'scissors' && computerChoice === 'rock') result = result_options[2] 
  
  result_container.innerHTML = result

}

main()


