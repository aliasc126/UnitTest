export class TicTacToe {
    board: string[][];
    currentPlayer: string;
    winner: string | null;
    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.winner = null;
    }

    printBoard() {
        for (let row of this.board) {
            console.log(row.map(cell => cell || ' ').join(' | '));
        }
        console.log('---------');
    }

    makeMove(row, col) {
        if (this.winner) {
            console.log(`Game over! Winner: ${this.winner}`);
            return false;
        }
        if (this.board[row][col] !== '') {
            console.log('Cell already taken!');
            return false;
        }
        this.board[row][col] = this.currentPlayer;
        if (this.checkWinner()) {
            this.winner = this.currentPlayer;
            console.log(`Player ${this.currentPlayer} wins!`);
        } else if (this.isDraw()) {
            this.winner = 'Draw';
            console.log('Game is a draw!');
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
        return true;
    }

    checkWinner() {
        const b = this.board;
        // Rows, columns, diagonals
        for (let i = 0; i < 3; i++) {
            if (b[i][0] && b[i][0] === b[i][1] && b[i][1] === b[i][2]) return true;
            if (b[0][i] && b[0][i] === b[1][i] && b[1][i] === b[2][i]) return true;
        }
        if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) return true;
        if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) return true;
        return false;
    }

    isDraw() {
        return this.board.flat().every(cell => cell !== '') && !this.checkWinner();
    }
}

// // Example usage:
// const game = new TicTacToe();
// game.printBoard();
// // game.makeMove(row, col); // row and col are 0-based indices