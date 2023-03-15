"use strict"

function miniMaxSum(arr) {
   let min = Math.min(...arr)

   let max = Math.max(...arr)

   let result = 0 

   for (let i = 0; i < arr.length; i++){
    result += arr[i]
   }

   let maxResult = result - min

   let minResult = result - max

   console.log(minResult,maxResult);

}


console.log(miniMaxSum([1,2,3,4,5]));