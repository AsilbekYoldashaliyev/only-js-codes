function countApplesAndOranges(s, t, a, b, apples, oranges) {

let i = 0
let landedApple = 0
let landedOrange = 0
let j = 0

// apple
while (i < apples.length) {
    if (a + apples[i] <= t && a + apples[i] >= s) {
landedApple += 1
    }

    i += 1

}

while (j < oranges.length) {
    if (a + oranges[j] <= t && a + oranges[j] >= s) {
landedOrange += 1
    }

    j += 1

}

return [landedApple, landedOrange]
 
}




let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

console.log(countApplesAndOranges(s,t,a,b,apples,oranges));