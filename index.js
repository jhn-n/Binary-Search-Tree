import { Tree } from "./tree.js";

const data = randomNumbers(20,100);
const tree = new Tree(data);

tree.prettyPrint();
console.log(tree.isBalanced());
// tree.levelOrderForEach((e) => console.log(e));
// console.log();
// tree.preOrderForEach((e) => console.log(e));
// console.log();
tree.inOrderForEach((e) => console.log(e));
console.log();
// tree.postOrderForEach((e) => console.log(e));
// console.log();

// tree.levelOrderForEach((e) => console.log(e))

const newData = randomNumbers(10,1000);
newData.forEach((e) => tree.insert(e));
tree.prettyPrint();
console.log(tree.isBalanced());

tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced());
tree.inOrderForEach((e) => console.log(e));

function randomNumbers(num, max) {
  const a = [];
  for (let i = 0; i < num; i++) {
    a.push(Math.floor(Math.random() * max));
  }
  return a;
}


