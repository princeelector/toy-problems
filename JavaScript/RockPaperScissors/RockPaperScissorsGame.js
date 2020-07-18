const userOptions = ['rock', 'paper', 'scissors', 'bomb'];
const computerOptions = ['rock', 'paper', 'scissors'];

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userOptions.includes(userInput)) return userInput; else console.error('Bad Input');
};

const getComputerChoice = () => {
  const computerChoice = computerOptions[Math.floor(Math.random()*3)];
  return computerChoice;
};

const determineWinner = (userChoice, computerChoice) => {
  const computerWinConditionMet = (
    (userChoice === 'rock' && computerChoice !== 'scissors') ||
    (userChoice === 'scissors' && computerChoice !== 'paper') ||
    (userChoice === 'paper' && computerChoice !== 'rock')
  );

  if (userChoice === computerChoice) return 'Tie...'; else if (computerWinConditionMet) return 'Computer wins.';
  return 'User wins!';
};

const playGame = Choice => {
  const userChoice = getUserChoice(Choice); const computerChoice = getComputerChoice();

  console.log(`User chooses ${userChoice} : Computer chooses ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

const userChoice = userOptions[Math.floor(Math.random()*4)];

playGame(userChoice);