// module.exports = maxHeight(height, width, length, n)
// {
//     //your code here
//     let array = [height, width, length];
//     array = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
//     let solution = 0;

//     array = array.map(arr => [
//         [arr[0], arr[1], arr[2]],
//         [arr[2], arr[1], arr[0]],
//         [arr[0], arr[2], arr[1]],
//     ]).flat(1);

//     array.sort((arr1, arr2) => {
//         return arr2[0] * arr2[1] - arr1[0] * arr1[1]
//     });
//     solution = array[0][2];
//     let firstArray = array[0];
//     let secondArray = array[1];
//     console.log(array);
//     for (let i = 1; i < array.length;) {

//         if (Math.max(secondArray[0], secondArray[1]) < Math.max(firstArray[0], firstArray[1])) {
//             solution += secondArray[2];
//             firstArray = secondArray;
//         }
//         secondArray = array[++i];

//     }
//     return solution;
// }
