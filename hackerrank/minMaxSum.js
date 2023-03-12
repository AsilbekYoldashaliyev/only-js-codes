// function miniMaxSum(arr) {
//     // Write your code here

//     let firstPart = 0;
//     let secondPart = 0;
//     let thirdPart = 0;
//     let fourthPart = 0;
//     let fivethPart = 0;

//     for (let i = 0; i < arr.length - 1; i++) {
//       firstPart = arr[i] + firstPart;
//     }

//     for (let a = 1; a < arr.length; a++) {
//       secondPart = secondPart + arr[a];
//     }

//     for (let a = 0; a < arr.length; a++) {
//       if (a === 2) {
//         continue;
//       }

//       thirdPart = arr[a] + thirdPart;
//     }
//     for (let a = 0; a < arr.length; a++) {
//       if (a === 3) {
//         continue;
//       }

//       fourthPart = arr[a] + fourthPart;
//     }

//     for (let a = 0; a < arr.length; a++) {
//       if (a === 2) {
//         continue;
//       }

//       fivethPart = arr[a] + fivethPart;
//     }

//     let result = [firstPart, secondPart, thirdPart, fourthPart, fivethPart];

//     console.log(Math.min(...result), Math.max(...result));
//   }

let testData = [501893267, 649027153, 379408215, 452968170, 487530619]

//  console.log(miniMaxSum(testData));

function miniMaxSum(arr) {
  let max = Math.max(...arr)

  let min = Math.min(...arr)

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    // if (min < arr[i]) {
    //  max = arr[i]
    // }
    //  if (max > arr[i]) {
    //     min = arr[i]
    // }
    result += arr[i]
  }

  let maxResult = result - min

  let minResult = result - max

 console.log(minResult, maxResult);
}

console.log(miniMaxSum(testData));

// result = 16 , 24
