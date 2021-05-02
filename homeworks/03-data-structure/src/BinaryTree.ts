import { mergeSort, compareFunction } from "./mergeSort";

enum TraverseType {
  Inorder,
  Preorder,
  Postorder,
  Breadth,
}

export interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export interface IBinaryTree<T> {
  setTree(tree: TreeNode<T>): this;
  traverse(type: TraverseType): T[];
  getColumn(columnOrder: number): T[];
}

export class BinaryTree<T> implements IBinaryTree<T> {
  constructor(protected tree: TreeNode<T>) {}

  public setTree(node: TreeNode<T>): this {
    this.tree = node;
    return this;
  }

  public traverse(type: TraverseType): T[] {
    switch (type) {
      case TraverseType.Breadth:
        return this.breadthSort(this.tree);
      case TraverseType.Inorder:
        return this.inorderSort(this.tree);
      case TraverseType.Postorder:
        return this.postorderSort(this.tree);
      case TraverseType.Preorder:
        return this.preorderSort(this.tree);
    }
  }

  private breadthSort(node: TreeNode<T>): T[] {
    const result: T[] = [];
    const queue: TreeNode<T>[] = [node];
    while (true) {
      const currentNode = queue.shift();
      if (!currentNode) break;
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  private inorderSort(node: TreeNode<T> | null): T[] {
    return node
      ? [
          ...this.inorderSort(node.left),
          node.value,
          ...this.inorderSort(node.right),
        ]
      : [];
  }

  private postorderSort(node: TreeNode<T> | null): T[] {
    return node
      ? [
          ...this.postorderSort(node.left),
          ...this.postorderSort(node.right),
          node.value,
        ]
      : [];
  }

  private preorderSort(node: TreeNode<T>): T[] {
    return node
      ? [
          node.value,
          ...this.postorderSort(node.left),
          ...this.postorderSort(node.right),
        ]
      : [];
  }

  public getColumn(columnOrder: number): T[] {
    const getColumnValue = (
      node: TreeNode<T> | null,
      currentColumn: number
    ): T[] => {
      return !node
        ? []
        : [
            ...(currentColumn === columnOrder ? [node.value] : []),
            ...getColumnValue(node.left, currentColumn - 1),
            ...getColumnValue(node.right, currentColumn + 1),
          ];
    };
    return mergeSort(getColumnValue(this.tree, 0), compareFunction);
  }
}
