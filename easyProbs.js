// function compareTriplets(a, b) {
//   let jCount = 0;
//   let tCount = 0;
//   let points = [];

//   for(let i = 0; a[i] && b[i]; i++) {
//     if(a[i] > b[i]) {
//       jCount++
//     } else {
//     if(a[i] < b[i]) {
//       tCount++}
//     }
//   }

//   points.push(jCount, tCount)
//   return points
// }

// let JonE = [3, 5, 1];
// let Trey = [2, 6, 1];
// output => [1, 1]

// console.log(compareTriplets(JonE, Trey))

// function aVeryBigSum(ar) {
//   return ar.reduce((acc, currEl) => {
//     if(acc >= 0 && acc <= 10**10) {
//       return acc + currEl
//     }
//   })
// }

// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
// let n = ... --num to be multiplied by ex
// let timesExp = ???**n

// let mtx = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9]
// ];

// let mtx = [
//   [6, 6, 7, -10, 9, -3, 8, 9, -1],
//   [9, 7, -10, 6, 4, 1, 6, 1, 1],
//   [-1, -2, 4, -6, 1, -4, -6, 3, 9],
//   [-8, 7, 6, -1, -6, -6, 6, -7, 2],
//   [-10, -4, 9, 1, -7, 8, -5, 3, -5],
//   [-8, -3, -4, 2, -3, 7, -5, 1, -5],
//   [-2, -7, -4, 8, 3, -1, 8, 2, 3],
//   [-3, 4, 6, -7, -7, -8, -3, 9, -6],
//   [-2, 0, 5, 4, 4, 4, -3, 3, 0]
// ];

// function diagonalDifference(arr) {
//   let mainSum = 0;
//   let secondarySum = 0;
//   let temp;
//   for(let row = 0; row < arr.length; row++) {
//       mainSum += arr[row][row];
//       secondarySum += arr[row][arr.length - row - 1];
//   }
//   if(mainSum < secondarySum) {
//     temp = mainSum;
//     mainSum = secondarySum;
//     secondarySum = temp;
//   }
//   return mainSum - secondarySum;
// };

// diagonalDifference(mtx);

// let numsArr = [1, 1, 0, -1, -1];

// function plusMinus(arr) {
//   let results = [];
//     let posNums = 0;
//     let negNums = 0;
//     let zeros = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) posNums++;
//         else if (arr[i] < 0) negNums++;
//         else zeros++;
//     }
//     results.push((posNums / arr.length).toFixed(6), (negNums / arr.length).toFixed(6), (zeros / arr.length).toFixed(6));

//     results.forEach(el => {
//       return console.log(el)
//     })
// };

// plusMinus(numsArr);

// function staircase(n) {

//   for(let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n - i) + '#'.repeat(i))
//   }
// };

// staircase(6)

// let numArr = [7, 69, 2, 221, 8974];
// // min sum => 16;
// // max sum => 24;

// function miniMaxSum(arr) {
//   let minSum = 0;
//   let maxSum = 0;
//   let i;

//   arr.sort()

//   for(let i = 0; i < arr.length - 1; i++) {
//     minSum += arr[i]
//   }

//   for(let i = arr.length - 1; i >= 1; i--) {
//     console.log(arr[i])
//     maxSum += arr[i]
//   }

//   console.log(minSum, maxSum);
// }

// miniMaxSum(numArr)
