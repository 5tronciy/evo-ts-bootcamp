import { mergeSort, compareFunction } from "../src/mergeSort";

describe("MergeSort", () => {
  it("Sort the array of numbers", () => {
    const array = [-1, 0, 1, 1, -2];
    expect(mergeSort(array, compareFunction)).toEqual(
      array.sort(compareFunction)
    );
  });
  it("Sort the array of strings", () => {
    const array = ["a", "b", "BY"];
    expect(mergeSort(array, compareFunction)).toEqual(
      array.sort(compareFunction)
    );
  });
});
