import { isAscendingArray } from './isAscendingArray';

describe('check value is ascending array or not', () => {
  describe('not an ascending array', () => {
    describe('not a array type', () => {
      it('value is not a array type should return false', () => {
        expect(isAscendingArray(null)).toBe(false);
        expect(isAscendingArray(undefined)).toBe(false);
        expect(isAscendingArray('a')).toBe(false);
        expect(isAscendingArray(1)).toBe(false);
        expect(isAscendingArray(true)).toBe(false);
        expect(isAscendingArray({})).toBe(false);
      });
    });
    describe('array has length < 2', () => {
      it('is array has length < 2 should return false', () => {
        expect(isAscendingArray([])).toBe(false);
        expect(isAscendingArray([1])).toBe(false);
      });
    });
    describe('array has length > 2 and is not ascending', () => {
      it('array has item with non-numeric data type should return false', () => {
        expect(isAscendingArray([1, '1', 2])).toBe(false);
        expect(isAscendingArray([1, undefined, 2])).toBe(false);
        expect(isAscendingArray([1, null, 2])).toBe(false);
        expect(isAscendingArray([1, true, 2])).toBe(false);
        expect(isAscendingArray([1, {}, 2])).toBe(false);
        expect(isAscendingArray([1, [1, 2], 2])).toBe(false);
      });
      it ('array has all item is number type but is not ascending', () => {
        expect(isAscendingArray([1, 3, 2])).toBe(false);
        expect(isAscendingArray([1.1, 1.0, 1.2])).toBe(false);
        expect(isAscendingArray([3, 2, 1])).toBe(false);
      });
    });
  });
  describe('array is ascending', () => {
    it('array has different item and ascending should return true', () => {
      expect(isAscendingArray([1, 2, 3])).toBe(true);
      expect(isAscendingArray([-1, 0, 1])).toBe(true);
      expect(isAscendingArray([-3, -2, -1])).toBe(true);
      expect(isAscendingArray([-3.5, -3.4, -3.3])).toBe(true);
      expect(isAscendingArray([1.1, 1.2, 1.3])).toBe(true);
    });
    it('array has some duplicated item and ascending should return true', () => {
      expect(isAscendingArray([1, 1])).toBe(true);
      expect(isAscendingArray([1, 2, 2, 3])).toBe(true);
      expect(isAscendingArray([1.1, 1.2, 1.2, 1.3])).toBe(true);
      expect(isAscendingArray([-3, -2, -2, -1])).toBe(true);
    });
  });
});
