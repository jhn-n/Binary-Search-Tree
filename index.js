import { Tree } from "./tree.js";

const dataA = [3, 5, 8, 5, 99, 1];
const dataB = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const treeB = new Tree(dataB);
treeB.prettyPrint();

// treeB.inOrderForEach((e) => console.log(e));
// treeB.preOrderForEach((e) => console.log(e));
treeB.postOrderForEach((e) => console.log(e));
