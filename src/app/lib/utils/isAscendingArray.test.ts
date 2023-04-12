import { isAscendingArray } from './isAscendingArray';
describe('check array is ascending or not', () => {
  test('array is empty', () => {
    expect(isAscendingArray([])).toBeFalsy();
  });
  test('array have only 1 item', () => {
    expect(isAscendingArray([1])).toBeTruthy();
  });
  test('array is ascending', () => {
    expect(isAscendingArray([1, 4, 7, 9])).toBeTruthy();
  });
  test('array is decrease', () => {
    expect(isAscendingArray([9, 7, 4, 1])).toBeFalsy();
  });
  test('array is mixed', () => {
    expect(isAscendingArray([1, 5, 2, 9])).toBeFalsy();
  });
  test('array is duplicated', () => {
    expect(isAscendingArray([1, 1, 1])).toBeTruthy();
  });
  test('array is ascending and duplicated', () => {
    expect(isAscendingArray([1, 2, 2, 3, 5, 6, 6])).toBeTruthy();
  });
});
