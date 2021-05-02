import { IBinaryTree, BinaryTree, TreeNode } from "./BinaryTree";

interface IBinarySearchTree<T> extends IBinaryTree<T> {
  has(value: T): boolean;
}

export class BinarySearchTree<T>
  extends BinaryTree<T>
  implements IBinarySearchTree<T> {
  public has(value: T): boolean {
    return this.isValue(value, this.tree);
  }

  private isValue(value: T, node: TreeNode<T> | null): boolean {
    if (!node) return false;
    return value === node.value
      ? true
      : value > node.value
      ? this.isValue(value, node.right)
      : this.isValue(value, node.left);
  }
}
