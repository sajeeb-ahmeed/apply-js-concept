// even -odd check 
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 327823;
const isEvanNumber = isEven(myNumber);
console.log(isEvanNumber);

const herNumbers = 32782;
const isEvanNumbers = isEven(herNumbers);
console.log(isEvanNumbers);

let theirNum = 233;
let isEvanTheirNum = isEven(theirNum);
console.log(isEvanTheirNum);