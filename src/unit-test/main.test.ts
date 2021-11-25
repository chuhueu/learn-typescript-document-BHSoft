import { isPositive, square } from './main';

describe('isPositive()', () => {
    it('should return true when n > 0', () => {
        expect(isPositive(1)).toBe(true);
        expect(isPositive(2)).toBe(true);
        expect(isPositive(3)).toBe(true);
    });
    it('should return false when n = 0', () => {
        expect(isPositive(0)).toBe(false);
    });
    it('should return false when n > 0', () => {
        expect(isPositive(-1)).toBe(false);
        expect(isPositive(-2)).toBe(false);
        expect(isPositive(-3)).toBe(false);
    });
});

describe("square()",() => {
    it(' ', () => {
        expect(square(10)).toBe(100);
        expect(square(5)).toBe(25);
        expect(square(4)).toBe(16);
    });
})
