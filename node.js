import { mergeSort } from "./merge-sort.js";

const test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const test2 = sortAndRemoveDuplicates(test);
console.log(test);
console.log(test2);

function sortAndRemoveDuplicates(arr) {
    return removeDuplicatesFromSortedArray(mergeSort(arr));
}

function removeDuplicatesFromSortedArray(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  newArr.push(arr.at(-1));
  return newArr;
}
