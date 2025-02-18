function generateSudoku(size) {
    let board = Array.from({ length: size }, () => Array(size).fill(0));

    function isValid(num, row, col) {
        for (let i = 0; i < size; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
        }
        return true;
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function fillBoard(row = 0, col = 0) {
        if (row === size) return true;
        if (col === size) return fillBoard(row + 1, 0);

        let numbers = shuffle([...Array(size)].map((_, i) => i + 1));

        for (let num of numbers) {
            if (isValid(num, row, col)) {
                board[row][col] = num;
                if (fillBoard(row, col + 1)) return true;
                board[row][col] = 0;
            }
        }
        return false;
    }

    fillBoard();
    return board;
}

function removeNumbers(board, size) {
    let numToRemove = size === 5 ? 8 : size === 7 ? 18 : 30;
    let newBoard = board.map(row => [...row]);

    while (numToRemove > 0) {
        let row = Math.floor(Math.random() * size);
        let col = Math.floor(Math.random() * size);
        if (newBoard[row][col] !== 0) {
            newBoard[row][col] = 0;
            numToRemove--;
        }
    }
    return newBoard;
}

function startGame(size) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 42px)`;

    let fullBoard = generateSudoku(size);
    let puzzleBoard = removeNumbers(fullBoard, size);

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = document.createElement('input');
            cell.type = 'number';
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.oninput = (event) => checkCell(event, fullBoard);

            if (puzzleBoard[row][col] !== 0) {
                cell.value = puzzleBoard[row][col];
                cell.disabled = true;
            } else {
                cell.value = '';
            }

            gameBoard.appendChild(cell);
        }
    }
}

function checkCell(event, solution) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const value = Number(cell.value);

    if (value === solution[row][col]) {
        cell.classList.add('correct');
        cell.classList.remove('incorrect');
    } else {
        cell.classList.add('incorrect');
        cell.classList.remove('correct');
    }
}
