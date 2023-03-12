
// let array = [-4, 3, -9, 0, 4, 1];

// let positive = 0;
// let negative = 0;
// let zero = 0;

// for (let b = 0; b < array.length; b++) {
//   if (array[b] > 0) positive = positive + 1;
//   else if (array[b] < 0) negative++;
//   else if (array[b] === 0) zero;
// }

// console.log(negative, positive, zero);

// const sumOfResult = positive + negative + zero;

// console.log((positive / array.length).toFixed(sumOfResult));
// console.log((negative / array.length).toFixed(sumOfResult));
// console.log((zero / array.length).toFixed(sumOfResult));

// let n = [[2], [1, 2], [1, 0, 1, 2]];

// function findDigits(n) {
//   // Write your code here
//   let strPlus = 0;

//   for (let i = 0; i < n.length; i++) {
//     strPlus += strPlus;
//   }
// }
// console.log(n);

// //////////////////////////////////// JumpingOnClouds

// c = [0,0,1,0,0,1,0]

// const JumpingOnClouds = (clouds) => {
//   let now = 0;
//   let overal = 0;

//   for (let i = 0; i < clouds.length; i++) {
//     if (clouds[now + 2] === 0) {
//       now += 2;
//       overal = overal + 1;
//     } else if (clouds[now + 1] === 0) {
//       now++;
//       overal = overal + 1;
//     }
//   }
// };

// JumpingOnClouds()

