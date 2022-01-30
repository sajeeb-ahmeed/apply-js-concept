var factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial = factorial * i;

}
console.log(factorial)
// factorial value assign 7! 
// 1! = 1 x 1
// 2! = 2 x 1 
// 3! = 3 x 2 x 1 
// 4! = 4 x 3 x 2 x 1 
// 5! = 5 x 4 x 3 x 2 x 1 
// 6! = 6 x  5 x 4 x 3 x 2 x 1 
// 7! + 7 x 6 x  5 x 4 x 3 x 2 x 1 

// recalculate factorial multiple time  function

function getFatcorial(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial = factorial * i
    }
    return factorial;
}

var myFact = 9;
var sevenfact = getFatcorial(myFact);
console.log(sevenfact);

let yourFact = 5;
let fiveFact = getFatcorial(yourFact);
console.log(fiveFact);

let theirFact = 13;
let thirtyFactorial = getFatcorial(theirFact);
console.log(thirtyFactorial);