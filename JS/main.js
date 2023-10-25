/*---------- Constants ----------*/
const iconNums = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

/*---------- Declare variables ----------*/
let score = 0;
let moves = 0;
let timer = 90;
let activeSquares = [];
let matchedSquares = [];
let inPlay = false;
let interval;
let checkingMatch = false;

/*---------- Cache HTML elements ----------*/
const resetGameBtn = document.querySelector('.reset-game');
const squaresEl = document.querySelectorAll('div > div');
const timerEl = document.querySelector('.timer');
const minsEl = document.querySelector('.mins');
const secsEl = document.querySelector('.secs');

/*---------- Initialize ----------*/
init();

function init() {
    // Reset defaults
    score = 0;
    moves = 0;
    timer = 90;
    activeSquares = [];
    matchedSquares = [];

    // Stop timer
    clearInterval(interval);

    // Remove classes from all squares
    squaresEl.forEach((square) => {
        square.classList.remove('active');
        square.classList.remove('match');
    });

    assignRandomIcons();
    updateTimerEl();
}
/*---------- Event listeners ----------*/
squaresEl.forEach((squareEl) => {
    squareEl.addEventListener('click', () => {
        boardClickHandler(squareEl);
    });
});

resetGameBtn.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
    }
    inPlay = false;
    init();
});

/*---------- Functions ----------*/
function startTimer() {
    updateTimerEl();
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerEl();
        } else {
            clearInterval(interval);
            inPlay = false;
            render();
        }
    }, 1000);
}

function updateTimerEl() {
    if (timer >= 60) {
        secsEl.textContent = timer < 70 ? `0${timer - 60}` : timer - 60;
        minsEl.textContent = '01';
    } else if (timer < 60) {
        secsEl.textContent = timer < 10 ? `0${timer}` : timer;
        minsEl.textContent = '00';
    }
}

function boardClickHandler(squareEl) {
    // Check if game has already been started and if not, start timer
    if (!inPlay) {
        inPlay = true;
        startTimer();
    }

    if (checkingMatch) {
        return;
    }

    // If all squares have been matched, end game
    if (matchedSquares.length === iconNums.length) {
        inPlay = false;
        render();
        return;
    }

    // If square has already been matched, return
    if (
        squareEl.classList.contains('match') ||
        squareEl.classList.contains('active')
    ) {
        return;
    }

    // Add square to activeSquares and add 'active' class
    activeSquares.push(squareEl.id);
    squareEl.classList.add('active');

    // If there are two items in activeSquares array, check if the IDs match
    if (activeSquares.length === 2) {
        checkingMatch = true;
        setTimeout(() => {
            checkMatch();
            checkingMatch = false;
        }, 600);
    }
}

function checkMatch() {
    if (activeSquares[0] === activeSquares[1]) {
        moves++;
        score++;
        // Update squares with 'active' class to 'match'
        const activeSquares = document.querySelectorAll('.active');
        activeSquares.forEach((square) => {
            square.classList.remove('active');
            square.classList.add('match');
            render();
        });
        matchedSquares.push(...activeSquares);
    } else {
        moves++;
        // Remove 'active' class from incorrect matches
        const activeSquares = document.querySelectorAll('.active');
        activeSquares.forEach((square) => {
            square.classList.remove('active');
        });
    }
    activeSquares = [];
}

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
    // renderMessage();
}
