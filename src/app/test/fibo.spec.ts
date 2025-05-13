import { fibonacciSeries } from '../fibo';

describe('fibonacciSeries', () => {
    it('should return an empty array for n = 0', () => {
        expect(fibonacciSeries(0)).toEqual([]);
    });

    it('should return an empty array for n < 0', () => {
        expect(fibonacciSeries(-5)).toEqual([]);
    });

    it('should return [0] for n = 1', () => {
        expect(fibonacciSeries(1)).toEqual([0]);
    });

    it('should return [0, 1] for n = 2', () => {
        expect(fibonacciSeries(2)).toEqual([0, 1]);
    });

    it('should return [0, 1, 1] for n = 3', () => {
        expect(fibonacciSeries(3)).toEqual([0, 1, 1]);
    });

    it('should return correct series for n = 5', () => {
        expect(fibonacciSeries(5)).toEqual([0, 1, 1, 2, 3]);
    });

    it('should return correct series for n = 10', () => {
        expect(fibonacciSeries(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('should not mutate the result on subsequent calls', () => {
        const first = fibonacciSeries(6);
        const second = fibonacciSeries(6);
        expect(first).toEqual([0, 1, 1, 2, 3, 5]);
        expect(second).toEqual([0, 1, 1, 2, 3, 5]);
        expect(first).not.toBe(second); // different arrays
    });
});