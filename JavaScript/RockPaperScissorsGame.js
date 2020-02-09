/* Make a game of rock, paper, scissors in which user will play against a computer.
Computer's choice has to be randomized while user can choose normally. You can include
a secret option that will enable the user to win any game no matter what the computer's
choice will be. */

const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';
const bomb = 'bomb';

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (
        userInput === rock ||
        userInput === paper ||
        userInput === scissors ||
        userInput === bomb
    ) {
        return userInput;
    } else {
        console.log('error');
    }
};

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie...';
    } else if (userChoice === rock && computerChoice === paper) {
        return 'Computer wins.';
    } else if (userChoice === rock && computerChoice === scissors) {
        return 'User wins!';
    } else if (userChoice === scissors && computerChoice === paper) {
        return 'User wins!';
    } else if (userChoice === scissors && computerChoice === rock) {
        return 'Computer wins.';
    } else if (userChoice === paper && computerChoice === rock) {
        return 'User wins!';
    } else if (userChoice === paper && computerChoice === scissors) {
        return 'Computer wins.';
    } else if (userChoice === bomb) {
        return 'User wins!';
    }
};

const playGame = Choice => {
    const userChoice = getUserChoice(Choice);
    const computerChoice = getComputerChoice();
    console.log(
        `User chooses ${userChoice} : Computer chooses ${computerChoice}`
    );
    console.log(determineWinner(userChoice, computerChoice));
};

/* To play the game put option of your choice as an argument for the function
and run the code. For instance: playGame(Scissors)
If you play again be sure to save the code before running it. */

playGame();
