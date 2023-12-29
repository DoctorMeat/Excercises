/** BinaryTreeNode: node for a binary tree. */
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    return this._minDepth(this.root);
  }

  _minDepth(node) {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return 1;
    }

    if (!node.left) {
      return 1 + this._minDepth(node.right);
    }

    if (!node.right) {
      return 1 + this._minDepth(node.left);
    }

    return 1 + Math.min(this._minDepth(node.left), this._minDepth(node.right));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    return this._maxDepth(this.root);
  }

  _maxDepth(node) {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this._maxDepth(node.left), this._maxDepth(node.right));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    return this._maxSum(this.root);
  }

  _maxSum(node) {
    if (!node) {
      return 0;
    }

    const leftSum = this._maxSum(node.left);
    const rightSum = this._maxSum(node.right);

    return Math.max(leftSum, rightSum) + node.val;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    return this._nextLarger(this.root, lowerBound);
  }

  _nextLarger(node, lowerBound) {
    if (!node) {
      return null;
    }

    if (node.val > lowerBound) {
      const leftResult = this._nextLarger(node.left, lowerBound);
      const rightResult = this._nextLarger(node.right, lowerBound);

      if (leftResult !== null && rightResult !== null) {
        return Math.min(leftResult, rightResult);
      } else if (leftResult !== null) {
        return leftResult;
      } else if (rightResult !== null) {
        return rightResult;
      } else {
        return node.val;
      }
    } else {
      return this._nextLarger(node.right, lowerBound);
    }
  }

  // Other methods (areCousins, serialize, deserialize, lowestCommonAncestor) can be implemented similarly
}

module.exports = { BinaryTree, BinaryTreeNode };
