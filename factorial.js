var factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial = factorial * i;

}
console.log(factorial);
// factorial value assign 7! 
// 1! = 1 x 1
// 2! = 2 x 1 
// 3! = 3 x 2 x 1 
// 4! = 4 x 3 x 2 x 1 
// 5! = 5 x 4 x 3 x 2 x 1 
// 6! = 6 x  5 x 4 x 3 x 2 x 1 
// 7! + 7 x 6 x  5 x 4 x 3 x 2 x 1 

// recalculate factorial multiple time  function in for loop

function getFatcorial(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var myFact = 8;
var sevenfact = getFatcorial(myFact);
console.log(sevenfact);

let yourFact = 5;
let fiveFact = getFatcorial(yourFact);
console.log(fiveFact);

let theirFact = 13;
let thirtyFactorial = getFatcorial(theirFact);
console.log(' This factrials from for loop fact for 13 is ', thirtyFactorial);

// recalculate factorial multiple time  function in while loop

function fact(numbers) {
    let factorials = 1;
    var i = 1;
    while (i <= numbers) {
        factorials = factorials * i;
        i++;
    }
    return factorials;
}

let test = 18;
let getTest = fact(test);
console.log(' This factrials from while loop fact for 18 is ', getTest)

// decration

function getFatcorial_1(number) {
    let factorial3 = 1;
    for (i = number; i >= 1; i--) {
        factorial3 = factorial3 * i
    }
    return factorial3;
}
var test23 = 9;
var ress = getFatcorial_1(test23);
console.log(ress)
console.log(i)

// for loop decration numbers
let number9 = 10;

for (x = number9; x >= 1; x--) {
    console.log(x)
}