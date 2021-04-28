interface ICompareFunction<T> {
  (a: T, b: T): number;
}

function compareFunction<T>(a: T, b: T): number {
  return a > b ? 1 : a == b ? 0 : -1;
}

function MergeSort<T>(array: T[], compareFunction: ICompareFunction<T>): T[] {
  return [];
}
