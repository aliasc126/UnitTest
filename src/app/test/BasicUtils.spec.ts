import { product } from "../BasicUtils";

describe('BasicUtils Test Suite', () => {
    it('returns the product of two numbers', () => {
        const actual = product(2, 3);
        expect(actual).toEqual(6);
    }),
    it('returns the product of two numbers with negative values', () => {
        const actual = product(-2, 3);
        expect(actual).toEqual(-6);
    }),
    it('returns the product of two numbers with zero', () => {
        const actual = product(0, 3);
        expect(actual).toEqual(0);
    }),
    it('returns the product of two numbers with both negative values', () => {
        const actual = product(-2, -3);
        expect(actual).toEqual(6);
    }),
    it('returns the product of two numbers with one negative and one zero', () => {
        const actual = product(0, -2);
        expect(actual).toEqual(-0);
    }),
    it('returns the product of two numbers with both zero', () => {
        const actual = product(0, 0);
        expect(actual).toEqual(0);
    }),
    it('returns incorrect product of two numbers', () => {
        const actual = product(2, 3);
        expect(actual).not.toEqual(7);
    })           

})