interface ICompareFunction<T> {
  (a: T, b: T): number;
}

export const compareFunction = <T>(a: T, b: T): number => {
  return a > b ? 1 : a === b ? 0 : -1;
};

export const mergeSort = <T>(
  array: T[],
  compareFunction: ICompareFunction<T>
): T[] => {
  if (array.length < 2) return array;
  const middle = Math.ceil(array.length / 2);
  const left = mergeSort(array.slice(0, middle), compareFunction);
  const right = mergeSort(array.slice(middle), compareFunction);
  return merge(left, right, compareFunction);
};

const merge = <T>(
  left: T[],
  right: T[],
  compareFunction: ICompareFunction<T>
): T[] => {
  const result: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compareFunction(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
