//////////////////////////////////////////// FizzBuzz

let output = [];

for (let nums = 1; nums <= 100; nums++) {
  if (nums % 3 === 0 && nums % 5 === 0) {
    output.push("Fizzbuzz");
  } else if (nums % 3 === 0) {
    output.push("Fizz");
  } else if (nums % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(nums);
  }
}

const printOutput = () => {
  console.log(output);
};

printOutput();

////////////////////////////////////////////// Simple Array

let ar = [1, 2, 3, 4, 5, 6];

let result = 0;

for (let i = 0; i < ar.length; i++) {
  result = result + ar[i];
}

console.log(result);

/////////////////////////////////////////////// Very BigSum

let arr = [10000001, 10000002, 10000003, 10000004, 10000005];

let sum = 0;

for (let a = 0; a < arr.length; a++) {
  sum = sum + arr[a];
}

console.log(sum);

///////////////////////////////////////////////// Plus , Minus

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
