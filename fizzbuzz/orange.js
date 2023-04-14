function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let adder = function (array, b) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] + b);
    }
    return result;
  };

  let checker = function (a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] >= s && a[i] <= t) counter++; // if fruit in field we will add 1 and we get result finally
    }
    return counter;
  };

  console.log(checker(adder(apples, a))); //it first add each element tree location and check if its in the home distance
  // for oranges
  console.log(checker(adder(oranges, b)));
}

console.log(countApplesAndOranges(7,11,5,15,[ -2, 2, 1 ],[ 5, -6 ]))