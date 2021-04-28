enum TreeNodeValue {
  Inorder,
  Preorder,
  Postorder,
  Breadth,
}

interface TreeNode<T> {
  value: TreeNodeValue;
  left: T;
  right: T;
}

interface BinaryTree<T> {
  constructor(tree: TreeNode<number>): void;

  setTree(tree: TreeNode<number>): this;

  traverse(traverseType: any): TreeNodeValue[];

  getColumn(columnOrder: number): TreeNodeValue[];
}

interface BinarySearchTree extends BinaryTree<number> {
  has(value: number): boolean;
}
