export const isAscendingArray = (arr: number[]): boolean => {
  if (!arr.length) {
    return false;
  }
  return arr.every((item: number, index: number) => index === 0 || item >= arr[index - 1]);
};
