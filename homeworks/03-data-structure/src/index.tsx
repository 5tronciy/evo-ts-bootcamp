enum TraverseType {
  Inorder,
  Preorder,
  Postorder,
  Breadth,
}

interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface IBinaryTree<T> {
  constructor(tree: TreeNode<T>): void;

  setTree(tree: TreeNode<T>): this;

  traverse(type: TraverseType): T[];

  getColumn(columnOrder: number): T[];
}

interface BinarySearchTree extends BinaryTree<number> {
  has(value: number): boolean;
}

function BreadthSort<T>(node: TreeNode<T>): T[] {
  const result: T[] = [];
  const queue: TreeNode<T>[] = [node];
  while (1) {
    const currentNode = queue.shift();
    if (!currentNode.value) break;
    result.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return result;
}

function InorderSort<T>(node: TreeNode<T>): T[] {
  return [...InorderSort(node.left), node.value, ...InorderSort(node.right)];
}
function PostorderSort<T>(node: TreeNode<T>): T[] {
  return [
    ...PostorderSort(node.left),
    ...PostorderSort(node.right),
    node.value,
  ];
}
function PreorderSort<T>(node: TreeNode<T>): T[] {
  return [
    node.value,
    ...PostorderSort(node.left),
    ...PostorderSort(node.right),
  ];
}

class BinaryTree<T> implements IBinaryTree<T> {
  tree: TreeNode<T>;
  constructor(tree: TreeNode<T>) {
    this.tree = tree;
  }

  setTree(node: TreeNode<T>): this {
    this.tree = node;
    return this;
  }

  traverse(type: TraverseType): T[] {
    switch (type) {
      case TraverseType.Breadth:
        return BreadthSort(this.tree);
      case TraverseType.Inorder:
        return InorderSort(this.tree);
      case TraverseType.Postorder:
        return PostorderSort(this.tree);
      case TraverseType.Preorder:
        return PreorderSort(this.tree);
    }
  }

  getColumn(columnOrder: number): T[] {
    return GetTreeColumn(this.tree, columnOrder);
  }
}

function GetTreeColumn<T>(
  node: TreeNode<T> | undefined,
  expectedColumn: number,
  currentColumn: number = 0
): T[] {
  if (!node) return [];

  const result: T[] = [];

  if (currentColumn === expectedColumn) result.push(node.value);

  result.push(...GetTreeColumn(node.left, expectedColumn, currentColumn - 1));
  result.push(...GetTreeColumn(node.right, expectedColumn, currentColumn + 1));

  return result;
}
