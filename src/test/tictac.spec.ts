import { TicTacToe } from '../app/tictac';

describe('TicTacToe', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
    });

    test('initializes with empty board and X as current player', () => {
        expect(game.board).toEqual([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        expect(game.currentPlayer).toBe('X');
        expect(game.winner).toBeNull();
    });

    test('makes a valid move and switches player', () => {
        expect(game.makeMove(0, 0)).toBe(true);
        expect(game.board[0][0]).toBe('X');
        expect(game.currentPlayer).toBe('O');
    });

    test('prevents move on taken cell', () => {
        game.makeMove(0, 0);
        expect(game.makeMove(0, 0)).toBe(false);
    });

    test('detects row win', () => {
        game.makeMove(0, 0); // X
        game.makeMove(1, 0); // O
        game.makeMove(0, 1); // X
        game.makeMove(1, 1); // O
        expect(game.makeMove(0, 2)).toBe(true); // X wins
        expect(game.winner).toBe('X');
    });

    test('detects column win', () => {
        game.makeMove(0, 0); // X
        game.makeMove(0, 1); // O
        game.makeMove(1, 0); // X
        game.makeMove(1, 1); // O
        expect(game.makeMove(2, 0)).toBe(true); // X wins
        expect(game.winner).toBe('X');
    });

    test('detects diagonal win', () => {
        game.makeMove(0, 0); // X
        game.makeMove(0, 1); // O
        game.makeMove(1, 1); // X
        game.makeMove(0, 2); // O
        expect(game.makeMove(2, 2)).toBe(true); // X wins
        expect(game.winner).toBe('X');
    });

    test('detects anti-diagonal win', () => {
        game.makeMove(0, 2); // X
        game.makeMove(0, 0); // O
        game.makeMove(1, 1); // X
        game.makeMove(1, 0); // O
        expect(game.makeMove(2, 0)).toBe(true); // X wins
        expect(game.winner).toBe('X');
    });

    test('detects draw', () => {
        // Fill the board with no winner
        game.makeMove(0, 0); // X
        game.makeMove(0, 1); // O
        game.makeMove(0, 2); // X
        game.makeMove(1, 1); // O
        game.makeMove(1, 0); // X
        game.makeMove(1, 2); // O
        game.makeMove(2, 1); // X
        game.makeMove(2, 0); // O
        expect(game.makeMove(2, 2)).toBe(true); // X
        expect(game.winner).toBe('Draw');
    });

    test('prevents moves after game is over', () => {
        game.makeMove(0, 0); // X
        game.makeMove(1, 0); // O
        game.makeMove(0, 1); // X
        game.makeMove(1, 1); // O
        game.makeMove(0, 2); // X wins
        expect(game.makeMove(2, 2)).toBe(false);
    });

    test('isDraw returns false if board is not full', () => {
        expect(game.isDraw()).toBe(false);
    });

    test('isDraw returns false if there is a winner', () => {
        game.makeMove(0, 0); // X
        game.makeMove(1, 0); // O
        game.makeMove(0, 1); // X
        game.makeMove(1, 1); // O
        game.makeMove(0, 2); // X wins
        expect(game.isDraw()).toBe(false);
    });

    test('printBoard outputs board', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        game.printBoard();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});