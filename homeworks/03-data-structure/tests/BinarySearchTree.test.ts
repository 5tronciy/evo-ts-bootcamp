import { BinarySearchTree } from "../src/BinarySearchTree";

describe("BinarySearchTree", () => {
  const value13 = { value: 13, left: null, right: null };
  const value14 = { value: 14, left: value13, right: null };
  const value7 = { value: 7, left: null, right: null };
  const value4 = { value: 4, left: null, right: null };
  const value6 = { value: 6, left: value4, right: value7 };
  const value1 = { value: 1, left: null, right: null };
  const value3 = { value: 3, left: value1, right: value6 };
  const value10 = { value: 10, left: null, right: value14 };
  const root = { value: 8, left: value3, right: value10 };
  const tree = new BinarySearchTree(root);
  it("Tree has node with value 1", () => {
    expect(tree.has(1)).toEqual(true);
  });
  it("Tree has node with value 2", () => {
    expect(tree.has(2)).toEqual(false);
  });
  it("Tree has node with value NaN", () => {
    expect(tree.has(NaN)).toEqual(false);
  });
});
