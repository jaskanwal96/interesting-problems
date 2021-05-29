// Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

// Example 1:

// Input: 
// N = 4 , M = 4
// Arr[][] = {{0, 1, 1, 1},
//            {0, 0, 1, 1},
//            {1, 1, 1, 1},
//            {0, 0, 0, 0}}
// Output: 2
// Explanation: Row 2 contains 4 1's (0-based
// indexing).

const RowWithMax1s = require('./rowWithMax1s');
const maxHeight = require('./findMaxHeight3d');

let solution = new RowWithMax1s();
// let testArr = [
//     [0, 1, 1, 1],
//     [0, 0, 0, 1],
//     [1, 1, 1, 1],
//     [0, 0, 0, 1]
// ]
// console.log(solution.rowWithMax1s(testArr, 4, 4));
let height = solution.maxHeight([4, 1, 4, 10], [6, 2, 5, 12], [7, 3, 6, 32], 4);
console.log(height);
