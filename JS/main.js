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
    board = assignRandomSquares();
    gameState.inPlay = true;
    render();
}

/*---------- Event listeners ----------*/

/*---------- Functions ----------*/
function assignRandomSquares() {}
