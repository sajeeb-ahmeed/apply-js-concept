// even - check 
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
// odd -check 

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}

const myNumber1 = 327823;
const isEvanNumber1 = isOdd(myNumber1);
console.log("This is Odd ", isEvanNumber1);

const myNumber = 327823;
const isEvanNumber = isEven(myNumber);
console.log("This is Evan ", isEvanNumber);

const herNumbers = 32782;
const isEvanNumbers = isEven(herNumbers);
console.log(isEvanNumbers);

let theirNum = 233;
let isEvanTheirNum = isEven(theirNum);
console.log(isEvanTheirNum);