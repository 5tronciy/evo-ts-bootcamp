import { BinaryTree, TraverseType } from "../src/BinaryTree";

describe("BinaryTree", () => {
  const value13 = { value: 13, left: null, right: null };
  const value14 = { value: 14, left: value13, right: null };
  const value7 = { value: 7, left: null, right: null };
  const value4 = { value: 4, left: null, right: null };
  const value6 = { value: 6, left: value4, right: value7 };
  const value1 = { value: 1, left: null, right: null };
  const value9 = { value: 9, left: null, right: null };
  const value3 = { value: 3, left: value1, right: value6 };
  const value10 = { value: 10, left: value9, right: value14 };
  const root = { value: 8, left: value3, right: value10 };
  const tree = new BinaryTree(root);

  describe("Public methods", () => {
    it("setTree", () => {
      const setTree = new BinaryTree(root);
      expect(setTree.setTree(root)).toEqual(setTree);
    });

    describe("traverse", () => {
      it("Breadth", () => {
        const result = [8, 3, 10, 1, 6, 9, 14, 4, 7, 13];
        expect(tree.traverse(TraverseType.Breadth)).toEqual(result);
      });

      it("Inorder", () => {
        const result = [1, 3, 4, 6, 7, 8, 9, 10, 13, 14];
        expect(tree.traverse(TraverseType.Inorder)).toEqual(result);
      });

      it("Postorder", () => {
        const result = [1, 4, 7, 6, 3, 9, 13, 14, 10, 8];
        expect(tree.traverse(TraverseType.Postorder)).toEqual(result);
      });

      it("Preorder", () => {
        const result = [8, 3, 1, 6, 4, 7, 10, 9, 14, 13];
        expect(tree.traverse(TraverseType.Preorder)).toEqual(result);
      });
    });

    describe("getColumn", () => {
      it("column equal -2", () => {
        expect(tree.getColumn(-2)).toEqual([1]);
      });

      it("column equal -1", () => {
        expect(tree.getColumn(-1)).toEqual([3, 4]);
      });

      it("column equal 0", () => {
        expect(tree.getColumn(0)).toEqual([6, 8, 9]);
      });

      it("column equal 1", () => {
        expect(tree.getColumn(1)).toEqual([7, 10, 13]);
      });

      it("column equal 2", () => {
        expect(tree.getColumn(2)).toEqual([14]);
      });
    });
  });
});
