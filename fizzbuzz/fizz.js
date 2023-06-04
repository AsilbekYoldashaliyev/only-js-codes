// let output = [];

// for (let nums = 1; nums <= 100; nums++) {
//   if (nums % 3 === 0 && nums % 5 === 0) {
//     output.push("Fizzbuzz");
//   } else if (nums % 3 === 0) {
//     output.push("Fizz");
//   } else if (nums % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(nums);
//   }
// }

// const printOutput = () => {
//   console.log(output);
// };

// printOutput();

/////// LIST FILTERING

// function div(n){

// return n.filter(Number)

// }

// console.log(div([1,2,0,2,'ar','aw']));

///// Convert number to reversed array of digits

// function digitize(n) {
//     let arr = String(n);
//     let result = []
//     arr.split().reverse().join();
//       return arr;
//   }

//   console.log(digitize(35214));

//   35214 => [4,1,2,5,3]

///// Convert Hash To An Array

// function toNumberArray(stringarray){

// let result = []

// for (let i = 0; i < stringarray.length; i++) {

// }
//  return result
// }

// console.log(toNumberArray(["1","2","3","0"]));

// Add Length

// function addLength(str) {

//     let arr =[]

//     str.split()

//     for (let i = 0; i < str.length; i++) {

//     }
//     return arr

// }

// console.log(addLength("ban add"));

function extraLongFactorials(n) {

    let arr =[]

    let kopaytirish = BigInt(1)

    for (let i = 1; i <= n; i++) {
       
        arr.push(i)
    }

    for (let a = 0; a < arr.length; a++) {
        
    kopaytirish *= BigInt(arr[a]) 
      
    }

    return String(kopaytirish)
}
console.log(extraLongFactorials(25));
