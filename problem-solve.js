// problem 1  check leap[ year ]

function leapYear(leap) {
    if ((leap % 4 == 0) && (leap % 100 != 0) || (leap % 400 == 0)) {

        return true;
    } else {
        return false;
    }
}
let myYear = 2100;
let checkLeap = leapYear(myYear);
console.log(" 2100 is a Leap Year ? =  ", checkLeap);

// problem - 2 Order pizza 

function foodPanda(foodName, qunatity) {
    if (foodName.toLowerCase() != "pizza") {
        return " Sorry we sell Pizza Only"
    } else if (qunatity > 20) {
        return 'Sorry 20 p Avaiable only '
    }

    var price = 10;
    var total = price * qunatity;
    var msg = "Successful Order Done !" + "Order Info : Food Name = " + foodName + " ." + "total Price  = " + total + "$" + "   Total Quantity : " + qunatity + "PCS";
    return msg;
}

console.log(foodPanda("PiZza", 15));


// problem -3 Check EVAN AND ODD 

function isEvanNumber(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
var myAge = 24;
var checkEvanNumber = isEvanNumber(myAge);
console.log(' My age is 24 , and 24 is an Evan Number ---',
    checkEvanNumber);

// Odd Number 

function isOddNumber(number) {
    if (number % 2 == 1) {
        return true;
    } else {
        return false;
    }
}
let herAge = 19;
let checkOddNumber = isOddNumber(herAge);
console.log(' Her Age Is 19, and 19 is an Odd Number--- ', checkOddNumber);

//Inch To Feet Convert 


function inchToFeet() {
    let oneInch = 1;
    let converToFeet = oneInch / 12;
    return converToFeet;
}
let converToFeet = inchToFeet();
console.log('1 Inch = ', converToFeet + ' Foot');


// Leap Year

function isLeapYears(leap) {
    if ((leap % 4 == 0) && (leap % 100 != 0) || (leap % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
let theYear = 3200;
let checkleap2 = isLeapYears(theYear);
console.log('3200 is a leap year', checkleap2);

//factorial js
// for loop 
function isFact(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;

    }
    return factorial;

}
let num = 9;
let fact = isFact(num);
console.log('This Factorial Calculate by For loop  ', fact);

// while loop 
function whileFact(number) {
    let facts = 1;
    let x = 1;
    while (x <= number) {
        x++;
        facts = facts * x;
    }
    return facts;
}
let number1 = 6;
let whilefacts = whileFact(number1);
console.log('This Factorial Calculate by While loop  ', whilefacts);

// celsius to farhenheit 

let celsius = (prompt("Enter Celsius Value "));
let convertTofarhen = (celsius * 9 / 5) + 32;

console.log(celsius + '-deg Celcuis = ', convertTofarhen + '-deg farhenheit');

// farhenheit to Celsius 
let farhen = (prompt(" Enter a Value "));
let cels = (farhen - 32) * 5 / 9;
console.log(farhen + "- deg faehenheit =", cels + ' -deg celsius ');