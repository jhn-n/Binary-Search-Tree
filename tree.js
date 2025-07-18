import { mergeSort, removeDuplicatesFromSortedArray } from "./merge-sort.js";

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
    const arr = removeDuplicatesFromSortedArray(mergeSort(rawArray));
    return this.#buildTreeRecur(arr, 0, arr.length - 1);
  }

  #buildTreeRecur(arr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = start + Math.floor((end - start) / 2);
    const root = new Node(arr[mid]);
    root.left = this.#buildTreeRecur(arr, start, mid - 1);
    root.right = this.#buildTreeRecur(arr, mid + 1, end);
    return root;
  }

  insert(value) {
    const temp = new Node(value);
    if (this.root === null) {
      this.root = temp;
    }

    // find parent node of new leaf
    let parent = null;
    let curr = this.root;
    while (curr !== null) {
      parent = curr;
      if (curr.data > value) {
        curr = curr.left;
      } else if (curr.data < value) {
        curr = curr.right;
      } else {
        // already present
        return;
      }
    }

    if (parent.data > value) {
      parent.left = temp;
    } else {
      parent.right = temp;
    }
  }

  deleteItem(value) {
    this.root = this.#deleteItemRecur(value);
  }

  #deleteItemRecur(value, node = this.root) {
    if (node === null) {
      return node;
    }
    if (node.data > value) {
      node.left = this.#deleteItemRecur(value, node.left);
    } else if (node.data < value) {
      node.right = this.#deleteItemRecur(value, node.right);
    } else {
      // 0 children or only right child
      if (node.left === null) {
        return node.right;
      }
      // only left child
      if (node.right === null) {
        return node.left;
      }
      // both children present
      let succ = node.right;
      while (succ !== null && succ.left !== null) {
        succ = succ.left;
      }
      node.data = succ.data;
      node.right = this.#deleteItemRecur(succ.data, node.right);
    }
    return node;
  }

  find(value, node = this.root) {
    if (node === null) {
      return node;
    }
    if (node.data > value) {
      return this.find(value, node.left);
    }
    if (node.data < value) {
      return this.find(value, node.right);
    }
    return node;
  }

  levelOrderForEach(callback) {
    if (!(callback instanceof Function)) {
      throw new Error("levelOrderForEach requires a function argument");
    }

    if (this.root === null) {
      return [];
    }

    const queue = [this.root];
    const results = [];

    while (queue.length > 0) {
      const curr = queue.shift();
      results.push(callback(curr.data));
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }

    return results;
  }

  prettyPrint() {
    this.#prettyPrintRecur(this.root);
  }

  #prettyPrintRecur(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.#prettyPrintRecur(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.#prettyPrintRecur(
        node.left,
        `${prefix}${isLeft ? "    " : "│   "}`,
        true
      );
    }
  }
}
