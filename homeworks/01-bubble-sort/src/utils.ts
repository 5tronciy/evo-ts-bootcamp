export function generateArray(size: number, limit: number = 200): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * limit));
}

export function sortArrayStep(array: {
  arr: number[];
  finished?: boolean;
}): { arr: number[]; finished?: boolean } {
  const { arr } = array;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      return { arr };
    }
  }
  return { arr: arr, finished: true };
}
