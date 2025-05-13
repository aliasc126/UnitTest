import { Calc } from '../app/Calc';

describe('Calc', () => {
    describe('add', () => {
        it('should add two positive numbers', () => {
            expect(Calc.add(2, 3)).toBe(5);
        });

        it('should add negative and positive numbers', () => {
            expect(Calc.add(-2, 3)).toBe(1);
        });

        it('should add two negative numbers', () => {
            expect(Calc.add(-2, -3)).toBe(-5);
        });

        it('should add zero', () => {
            expect(Calc.add(0, 5)).toBe(5);
        });
    });

    describe('subtract', () => {
        it('should subtract two positive numbers', () => {
            expect(Calc.subtract(5, 3)).toBe(2);
        });

        it('should subtract a larger number from a smaller one', () => {
            expect(Calc.subtract(3, 5)).toBe(-2);
        });

        it('should subtract negative numbers', () => {
            expect(Calc.subtract(-5, -3)).toBe(-2);
        });

        it('should subtract zero', () => {
            expect(Calc.subtract(5, 0)).toBe(5);
        });
    });

    describe('multiply', () => {
        it('should multiply two positive numbers', () => {
            expect(Calc.multiply(2, 3)).toBe(6);
        });

        it('should multiply by zero', () => {
            expect(Calc.multiply(5, 0)).toBe(0);
        });

        it('should multiply negative and positive numbers', () => {
            expect(Calc.multiply(-2, 3)).toBe(-6);
        });

        it('should multiply two negative numbers', () => {
            expect(Calc.multiply(-2, -3)).toBe(6);
        });
    });

    describe('divide', () => {
        it('should divide two positive numbers', () => {
            expect(Calc.divide(6, 3)).toBe(2);
        });

        it('should divide negative by positive', () => {
            expect(Calc.divide(-6, 3)).toBe(-2);
        });

        it('should divide two negative numbers', () => {
            expect(Calc.divide(-6, -3)).toBe(2);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => Calc.divide(5, 0)).toThrow('Division by zero is not allowed.');
        });

        it('should divide zero by a number', () => {
            expect(Calc.divide(0, 5)).toBe(0);
        });
    });
});