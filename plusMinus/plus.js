
let array = [-4, 3, -9, 0, 4, 1];

let positive = 0;
let negative = 0;
let zero = 0;

for (let b = 0; b < array.length; b++) {
  if (array[b] > 0) positive = positive + 1;
  else if (array[b] < 0) negative++;
  else if (array[b] === 0) zero;
}

console.log(negative, positive, zero);

const sumOfResult = positive + negative + zero;

console.log((positive / array.length).toFixed(sumOfResult));
console.log((negative / array.length).toFixed(sumOfResult));
console.log((zero / array.length).toFixed(sumOfResult));
