/*---------- Constants ----------*/
const iconNums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

/*---------- Declare variables ----------*/
let gameState = {
    board: [],
    score: 0,
    moves: 0,
    inPlay: false,
};

/*---------- Cache HTML elements ----------*/
const startGameBtn = document.querySelector('.start-game');
const resetGameBtn = document.querySelector('.reset-game');
const boardElement = document.querySelector('.board');

/*---------- Initialize ----------*/
function init() {
    gameState.board = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    assignRandomIcons();
    gameState.inPlay = true;
    render();
}

/*---------- Event listeners ----------*/
startGameBtn.addEventListener('click', init);

/*---------- Functions ----------*/

function assignRandomIcons() {
    let randomNums = [];
    // Populate randomNums with nums from 1-19, ensuring that each number is repeated only once
    // Do while loop idea from https://stackoverflow.com/questions/67944250/check-if-value-exists-in-an-array-and-if-not-generate-a-new-random-number
    for (let i = 0; i < iconNums.length; i++) {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 20);
        } while (randomNums.includes(randomNum));
        randomNums[i] = randomNum;
    }
    let iconNumsShuffled = [];
    for (let i = 0; i < randomNums.length; i++) {
        iconNumsShuffled[i] = iconNums[randomNums[i]];
    }
    for (let i = 0; i < iconNums.length; i++) {
        const classSelector = `.square-${i}`;
        const square = document.querySelector(classSelector);
        square.id = `icon-${iconNumsShuffled[i]}`;
    }
}

function render() {
    renderBoard();
    renderMessage();
}

function renderBoard() {
    for (let i = 0; i < gameState.board.length; i++) {
        const idSelector = `#square-${i}`;
    }
}
