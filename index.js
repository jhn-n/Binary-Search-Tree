import { Tree } from "./tree.js";

const data = [3, 5, 8, 5, 99, 1];
const dataB = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(dataB);
tree.prettyPrint();

console.log(tree.isBalanced());