/*---------- Constants ----------*/

/*---------- Declare variables ----------*/
let gameState = {
    board: [],
    score: 0,
    moves: 0,
    inPlay: false,
};

/*---------- Cache HTML elements ----------*/

/*---------- Initialize ----------*/
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    assignRandomSquares();
    gameState.inPlay = true;
    render();
}

/*---------- Event listeners ----------*/

/*---------- Functions ----------*/
function assignRandomSquares() {
    const iconNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < gameState.board.length; i++) {}
}

function render() {
    renderBoard();
    renderMessage();
}

function renderBoard() {
    for (let i = 0; i < board.length; i++) {
        const idSelector = `#square-${i}`;
    }
}
