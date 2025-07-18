import { sortAndRemoveDuplicates } from "./array-processing.js";

class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

export class Tree {
  constructor(rawArray) {
    this.root = this.buildTree(rawArray);
  }

  buildTree(rawArray) {
    const arr = sortAndRemoveDuplicates(rawArray);
    return this.buildTreeRecur(arr, 0, arr.length - 1);
  }

  buildTreeRecur(arr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = start + Math.floor((end - start) / 2);
    const root = new Node(arr[mid]);
    root.left = this.buildTreeRecur(arr, start, mid - 1);
    root.right = this.buildTreeRecur(arr, mid + 1, end);
    return root;
  }

  prettyPrint() {
    this.prettyPrintRecur(this.root);
  }

  prettyPrintRecur(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrintRecur(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrintRecur(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
