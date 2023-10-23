/*---------- Constants ----------*/
const iconNums = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

/*---------- Declare variables ----------*/
let gameState = {
    board: [],
    score: 0,
    moves: 0,
    activeSquares: [],
    matchedSquares: [],
    inPlay: false,
};

/*---------- Cache HTML elements ----------*/
const resetGameBtn = document.querySelector('.reset-game');
const squaresEl = document.querySelectorAll('div > div');

/*---------- Initialize ----------*/
init();

function init() {
    gameState.board = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    assignRandomIcons();
    render();
}
/*---------- Event listeners ----------*/
squaresEl.forEach((squareEl) => {
    squareEl.addEventListener('click', () => {
        boardClickHandler(squareEl);
    });
});

/*---------- Functions ----------*/
function boardClickHandler(squareEl) {
    // Check if game has already been started and if not, start timer
    if (!gameState.inPlay) {
        gameState.inPlay = true;
        // TODO: timer funtion
        // startTimer();
    }

    // If all squares have been matched, end game
    if (gameState.matchedSquares.length === gameState.board.length) {
        gameState.inPlay = false;
        render();
        return;
        // If square has already been matched, return
    } else if (squareEl.classList.contains('match')) {
        return;
    }

    // Add square to activeSquares
    const squareNum = squareEl.className;
    gameState.activeSquares.push(squareNum);
    console.log(gameState.activeSquares);

    // Add active class to square
    squareEl.classList.add('active');

    // TODO: If there are two items in activeSquares array, check if the IDs match
    // checkMatch();

    render();
}

function checkMatch() {}

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

    // Each num of randomNum becomes the index of iconNumsShuffled
    let iconNumsShuffled = [];
    for (let i = 0; i < randomNums.length; i++) {
        iconNumsShuffled[i] = iconNums[randomNums[i]];
    }

    // iconNums are shuffled and the ID is assigned to each square
    for (let i = 0; i < iconNums.length; i++) {
        const classSelector = `.square-${i}`;
        const square = document.querySelector(classSelector);
        square.id = `icon${iconNumsShuffled[i]}`;
    }
}

function render() {
    renderBoard();
    // renderMessage();
}

function renderBoard() {
    for (let i = 0; i < gameState.board.length; i++) {
        const idSelector = `#square-${i}`;
    }
}
