// Function to get the user's choice and validate it
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'lava') {
    return userInput;
  } else {
    return null;
  }
};
// Function to get the computer's random choice
function getComputerChoice () {
 const randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0) {
      return 'rock';
  } else if (randomNumber === 1) {
       return 'paper';
  } else {
      return 'scissors';
  }
};
// Function to determine the winner based on choices
function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
     return 'It is a tie';
  }
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
      return 'User won';
  } else if (userChoice === 'lava') {
     return 'Boom! Lava wins — nothing can beat it!';
  } else {
      return 'Computer won';
  }
};
// Function to play the game and log results
function playGame () {
const userChoice = getUserChoice('rock');
if (!userChoice) {
    console.log("Oops! That’s not a valid choice. Pick rock, paper, scissors, or try the secret code: lava!");
    return;
  }
const computerChoice = getComputerChoice();
console.log(`User: ${userChoice}`);
console.log(`Computer: ${computerChoice}`);
console.log(determineWinner (userChoice, computerChoice));
};
playGame();