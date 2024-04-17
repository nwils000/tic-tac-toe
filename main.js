let player1 = {
  name: '',
  symbol: '',
  score: 0,
  choices: [],
};

let player2 = {
  name: '',
  symbol: '',
  score: 0,
  choices: [],
};

let currentPlayer = player1;

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

let clickCount = 0;

let player1NameInput = document.getElementById('player1-name-input');
let player2NameInput = document.getElementById('player2-name-input');
let startGameButton = document.getElementById('start-game-button');
let playerNameSubmissionError = document.getElementById(
  'player-name-submission-error'
);
let gamePageWrapper = document.getElementById('game-page-wrapper');
let mainWrapper = document.getElementById('main-wrapper');
let board = document.querySelector('.board');
let winnerText = document.querySelector('.winner-text');
let inGameWinner = document.querySelector('#in-game-winner');
let gameButtonWrapper = document.querySelector('.game-button-wrapper');

startGameButton.addEventListener('click', () => {
  player1.name = player1NameInput.value;
  player2.name = player2NameInput.value;
  if (player1.name !== '' && player2.name !== '') {
    console.log('User objects on game start: '.player1, player2);
    mainWrapper.style.display = 'none';
    gamePageWrapper.style.display = 'block';
  } else {
    playerNameSubmissionError.textContent = 'Please submit 2 names.';
  }
});

function winnerDisplay() {
  inGameWinner.style.display = 'block';
  winnerText.style.display = 'block';
  gameButtonWrapper.style.display = 'block';
}

function catDisplay() {
  inGameWinner.style.display = 'block';
  winnerText.style.display = 'block';
  gameButtonWrapper.style.display = 'block';
  winnerText.textContent = 'CAT!';
}

function winningConditions(board) {
  if (
    (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
    (board[0] === 'O' && board[1] === 'O' && board[2] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
    (board[3] === 'O' && board[4] === 'O' && board[5] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
    (board[6] === 'O' && board[7] === 'O' && board[8] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
    (board[0] === 'O' && board[3] === 'O' && board[6] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
    (board[1] === 'O' && board[4] === 'O' && board[7] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
    (board[2] === 'O' && board[5] === 'O' && board[8] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
    (board[0] === 'O' && board[4] === 'O' && board[8] === 'O')
  ) {
    winnerDisplay();
  }
  if (
    (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') ||
    (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
  ) {
    winnerDisplay();
  }
}

function createBoardCell(id, gameBoardLocation) {
  let element = document.createElement('div');
  element.setAttribute('id', id);
  element.addEventListener('click', () => {
    if (clickCount % 2 === 0 && element.textContent === '') {
      element.textContent = 'O';
      gameBoard[gameBoardLocation] = 'O';
      clickCount++;
    } else if (clickCount % 2 !== 0 && element.textContent === '') {
      element.textContent = 'X';
      gameBoard[gameBoardLocation] = 'X';
      clickCount++;
    }
    if (!gameBoard.includes(' ')) {
      catDisplay();
    }

    console.log(gameBoard);
    winningConditions(gameBoard);
  });
  board.appendChild(element);
}

for (let i = 0; i < 9; i++) {
  createBoardCell(`cell ${i}`, i);
}

/*
  Data/State Section
*/

/*
  Variables
    player1, player2: Objects storing player names, symbols, and scores.
    currentPlayer: Indicates which player's turn it is.
    gameBoard: Array of strings representing the state of the game board.
    clickCount: Counter to track the number of clicks (used to determine symbol placement and turn).
*/

/*
  State Management
    User Objects: Track each player's choices and scores throughout the game.
    Game Board State: Maintain the state of each cell on the board.
    Click Counter: Use to determine whether the current move is an "X" or an "O".
*/

/*
  Functions Section
*/

/*
  Functions to Implement
    initializeGame: Set up initial game state, including resetting scores and clearing the board.
    shuffleNames: Randomly determine which player goes first.
    updateBoard(index): Update the game board based on player interaction; place "X" or "O" depending on the click count.
    checkWin: Check the current state of the board against possible winning conditions.
    displayWinner: Display the winner and update the game UI to show game over options. 
    resetGame: Clear the game state and prepare for a new game or round.
*/

/*
  Event Listeners
    Click Events for Game Cells: Detect clicks on game board cells, update the board, and toggle player turns.
    New Round/Game Buttons: Handle game progression controls, including starting new rounds and concluding the current game session.
    Submit Names Button: Save the current value of both name input fields into their respective user object.
*/

/*
  Pages Section
*/

/*
 Page 1: User Input and Game Initialization
    Username Input Logic: Handle the input of usernames for both players.
    Start Game Logic: Implement the logic to start the game once usernames are entered.
*/

/*
  Page 2: Name Shuffling Animation
    Shuffling Animation: Display shuffling of player names briefly before transitioning to the game play setup on the next page.
*/

/*
  Page 3 and 4: Game Setup
    Unified Page Logic: Serve as both pages, switching display based on the initial shuffle result.
    Player Name Display: Show the current player's name.
    Symbol Selection: Allow players to choose between "X" or "O". The choice is stored in the user object.
    Game Initiation Message: Display a paragraph indicating that the player who chose "X" will go first.
*/

/*
  Page 5: Gameplay
    Player Information Display: Show player names and their corresponding symbols (X/O).
    Game Board Interaction:
      Store and manage the game board state.
      Handle cell click events to assign symbols and check for win conditions.
    Win Detection: Check for three consecutive symbols and declare the winner.
    Score Updating and Round Management: Update scores, allow starting a new round or finishing the game.
    End Round/Game Options: Provide buttons to start a new round or finish the game.
*/

/*
  Page 6: Game Conclusion
    Winner Announcement: Display the game's winner.
    Game Reset: Offer a button to start a new game, resetting all states.
*/
