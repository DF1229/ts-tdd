import * as math from '../math';

describe('The math module', () => {
    it('should correctly add two numbers', () => {
        expect(math.add(1, 2)).toEqual(3);
        expect(math.add(2, 3)).toEqual(5);
        expect(math.add(-3, 4)).toEqual(1);
        expect(math.add(3, -4)).toEqual(-1);
        expect(math.add(math.add(1, 2), 5)).toEqual(8);
    });

    it('should correctly divide two numbers', () => {
        expect(math.divide(1, 2)).toEqual(0.5);
        expect(math.divide(2, 1)).toEqual(2);
        expect(math.divide(5, 2)).toEqual(2.5);
        expect(math.divide(30, 0)).toEqual(30);
    });

    it('should multiply correctly', () => {
        expect(math.mult(1, 3)).toEqual(3);
    });

    it('should subtract correctly', () => {
        expect(math.subtract(5, 1)).toEqual(4);
        expect(math.subtract(5123, 123)).toEqual(5000);
        expect(math.subtract(5123, -123)).toEqual(5246);
    });
});