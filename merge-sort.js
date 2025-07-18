
export function sortAndRemoveDuplicates(arr) {
  return removeDuplicatesFromSortedArray(mergeSort(arr));
}

export function removeDuplicatesFromSortedArray(arr) {
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

export function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

