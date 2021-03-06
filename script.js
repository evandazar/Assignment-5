// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const range = function(firstNum, lastNum) {
  let numlist = [];
  for (let i = firstNum; i <= lastNum; i++) {
    numlist.push(i);
  }
  return numlist;
};
console.log(range(1, 10));

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55
const sum = function(arrayNum) {
  let aSum = 0;
  for (let j = 0; j <= arrayNum.length - 1; j++) {
    aSum += arrayNum[j];
  }
  return aSum;
};
console.log(sum(range(1, 10)));
// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
const reverseArray = function(arraySet) {
  let arrayList = [];
  for (let k = arraySet.length - 1; k >= 0; k--) {
    arrayList.push(arraySet[k]);
  }
  return arrayList;
};
console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
const reverseArrayInPlace = function(array) {
  for (let l = 0, m = array.length - 1; l < m; l++, m--) {
    let value1 = array[l];
    array[l] = array[m];
    array[m] = value1;
  }
  return array;
};
console.log(reverseArrayInPlace(arrayValue));
