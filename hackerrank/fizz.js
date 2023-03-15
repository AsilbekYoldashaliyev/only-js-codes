
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