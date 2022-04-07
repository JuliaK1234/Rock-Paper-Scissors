// Complete game function //

  let playerScore = 0;
  let computerScore = 0;

  let compChoice;
  let playerChoice;

//  grab user input and run function to evaluate choices //
//querySelector() looks through the entire html and selects the thing in parentheses//
  let pScoreboard = document.querySelector('.p-count');
  let cScoreboard = document.querySelector('.c-count');
  let roundResult = document.querySelector('.result');

function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

function throwRock() {
  playerChoice = '.rock';
  computerChoice();
  game();
}

let game;

switch (game) {
  case "playerChoice = 'rock' && computerChoice = 'paper'":
    console.log(computerScore++);
    break;
  case "playerChoice = 'rock' && computerChoice = 'scissor'":
    console.log(playerScore++);
    break;
  case "playerChoice = 'rock' && computerChoice = 'rock'":
    console.log('Tie!');
    break;
}
