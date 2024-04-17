let player1 = {
  name: player1Name,
  symbol: '',
  score: 0,
};

let player2 = {
  name: player2Name,
  symbol: '',
  score: 0,
};

let currentPlayer = player1;

let gameBoard = ['', '', '', '', '', '', '', '', ''];

let clickCount = 0;

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
