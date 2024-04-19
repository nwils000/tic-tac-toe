// Player Objects
let player1 = {
  name: '',
  symbol: '',
  score: 0,
};

let player2 = {
  name: '',
  symbol: '',
  score: 0,
};

// Game State
let currentPlayer = player1;
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let clickCount = 1;
let currentRoundOver = false;

// All elements
let player1NameInput = document.getElementById('player1-name-input');
let player2NameInput = document.getElementById('player2-name-input');
let startGameButton = document.getElementById('start-game-button');
let playerNameSubmissionError = document.getElementById(
  'player-name-submission-error'
);
let gamePageWrapper = document.getElementById('game-page-wrapper');
let mainWrapper = document.getElementById('main-wrapper');
let shufflingNamesWrapper = document.querySelector('.shuffling-names-wrapper');
let board = document.querySelector('.board');
let winnerText = document.querySelector('.winner-text');
let gameButtonWrapper = document.querySelector('.game-button-wrapper');
let newRoundButton = document.getElementById('new-round-button');
let finishGameButton = document.getElementById('finish-game-button');
let newGameButton = document.getElementById('new-game-button');
let winOrDraw = document.getElementById('win-or-draw');

// Display elements for players and scores
let player1NameDisplay = document.getElementById('player1-in-game-name');
let player2NameDisplay = document.getElementById('player2-in-game-name');
let player1ScoreNameDisplay = document.getElementById(
  'player1-score-in-game-name'
);
let player2ScoreNameDisplay = document.getElementById(
  'player2-score-in-game-name'
);
let finishedGame = document.getElementById('finished-game');
let scoreVsScore = document.getElementById('score-vs-score');

// Draggables
let XPlayer1 = document.getElementById('draggableX-player1');
let OPlayer1 = document.getElementById('draggableO-player1');
let XPlayer2 = document.getElementById('draggableX-player2');
let OPlayer2 = document.getElementById('draggableO-player2');

// Event listener for start of game
startGameButton.addEventListener('click', () => {
  // Validate input names
  if (player1NameInput.value !== '' && player2NameInput.value !== '') {
    player1.name = player1NameInput.value;
    player2.name = player2NameInput.value;
    player1NameDisplay.textContent = player1.name;
    player2NameDisplay.textContent = player2.name;
    player1ScoreNameDisplay.textContent = `${player1.name}: ${player1.score}`;
    player2ScoreNameDisplay.textContent = `${player2.name}: ${player2.score}`;

    // Randomize player order and assign symbols
    shufflePlayers();
    XPlayer1.style.display = player1.symbol === 'X' ? 'flex' : 'none';
    OPlayer1.style.display = player1.symbol === 'O' ? 'flex' : 'none';
    XPlayer2.style.display = player2.symbol === 'X' ? 'flex' : 'none';
    OPlayer2.style.display = player2.symbol === 'O' ? 'flex' : 'none';

    // Hide main menu and show game
    mainWrapper.style.display = 'none';
    shufflingNamesWrapper.style.display = 'flex';
    setTimeout(showGame, 1000); // Delay to show shuffled names
  } else {
    playerNameSubmissionError.textContent = 'Please submit 2 names.';
  }
});

function shufflePlayers() {
  // Randomize who starts as 'X' or 'O'
  if (Math.random() < 0.5) {
    player1.symbol = 'X';
    player2.symbol = 'O';
  } else {
    player1.symbol = 'O';
    player2.symbol = 'X';
  }
}

function showGame() {
  shufflingNamesWrapper.style.display = 'none';
  gamePageWrapper.style.display = 'block';
}

// Functionality for new game and rounds
newGameButton.addEventListener('click', newGame);

function newGame() {
  // Reset scores and display initial screen
  player1.score = 0;
  player2.score = 0;
  finishedGame.style.display = 'none';
  mainWrapper.style.display = 'flex';
  newRound();
}

finishGameButton.addEventListener('click', finishGame);

function finishGame() {
  // Determine winner and display results
  let winner = player1.score > player2.score ? player1 : player2;
  let loser = player1.score < player2.score ? player1 : player2;
  if (winner.score === loser.score) {
    winOrDraw.textContent = 'You both lose!!!';
    scoreVsScore.textContent = `Score was tied ${winner.score} to ${loser.score}`;
  } else {
    winOrDraw.textContent = `${winner.name}, you won ${winner.score} to ${loser.score}!`;
  }
  gamePageWrapper.style.display = 'none';
  finishedGame.style.display = 'flex';
  XPlayer1.style.display = 'none';
  OPlayer1.style.display = 'none';
  XPlayer2.style.display = 'none';
  OPlayer2.style.display = 'none';
}

newRoundButton.addEventListener('click', newRound);

function newRound() {
  // Reset game board for a new round
  gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  currentRoundOver = false;
  clickCount = 1;
  for (let i = 0; i < 9; i++) {
    let element = document.getElementById(`cell-${i}`);
    element.innerHTML = ''; // Clear the cell content
  }
  winnerText.style.visibility = 'hidden';
  gameButtonWrapper.style.visibility = 'hidden';
}

// Setup board and gameplay logic
for (let i = 0; i < 9; i++) {
  createBoardCell(i);
}

function createBoardCell(index) {
  // Create individual cells for the game board
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('id', `cell-${index}`);
  cell.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
  });
  cell.addEventListener('drop', (e) => {
    e.preventDefault();
    if (!cell.textContent.includes(' ') && !currentRoundOver) {
      cell.appendChild(draggedItem.cloneNode(true));
      gameBoard[index] = draggedItem.id.includes('X') ? 'X' : 'O';
      checkGameStatus();
      R;
    }
  });
  board.appendChild(cell);
}

// Drag and drop functionality
let draggedItem = null;
let draggableElements = document.querySelectorAll('[draggable="true"]');

draggableElements.forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    console.log('drag-start', draggedItem.id);
  });
});

function checkGameStatus() {
  winningConditions(gameBoard);
  if (!gameBoard.includes(' ')) {
    catDisplay();
  }
}

function winningConditions(board) {
  if (currentRoundOver) return;
  if (
    (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
    (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
    (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
    (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
    (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
    (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
    (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
    (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
  ) {
    winnerDisplay('X');
    return 'won';
  }
  if (
    (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
    (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
    (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
    (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
    (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
    (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
    (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
    (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
  ) {
    winnerDisplay('O');
    return 'won';
  }
}

function winnerDisplay(winner) {
  // Display winner and update scores
  let scoringPlayer = winner === player1.symbol ? player1 : player2;
  scoringPlayer.score++;
  winnerText.textContent = `${scoringPlayer.name} won this round!`;
  player1ScoreNameDisplay.textContent = `${player1.name}: ${player1.score}`;
  player2ScoreNameDisplay.textContent = `${player2.name}: ${player2.score}`;
  winnerText.style.visibility = 'visible';
  gameButtonWrapper.style.visibility = 'visible';

  currentRoundOver = true;
}

function catDisplay() {
  // Display a draw condition
  if (currentRoundOver) return;
  if (winningConditions(gameBoard) !== 'won') {
    currentRoundOver = true;
    winnerText.textContent = 'CAT!';
    winnerText.style.visibility = 'visible';
    gameButtonWrapper.style.visibility = 'visible';
  }
}

// BUGS

// DOUBLE WIN AND IF TIED WHEN THEY FINISH GAME

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
