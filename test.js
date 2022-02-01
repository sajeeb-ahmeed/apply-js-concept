// celsius to farhenheit 

let celsius = (prompt("Enter Celsius Value "));
let convertTofarhen = (celsius * 9 / 5) + 32;

console.log(celsius + '-deg Celcuis = ', convertTofarhen + '-deg farhenheit');

// farhenheit to Celsiuss
let farhen = (prompt(" Enter a Value "));
let cels = (farhen - 32) * 5 / 9;
console.log(farhen + "- deg faehenheit =", cels + ' -deg celsius ');
// function


function cel(fst, end) {
    console.log(fst + end);
}
var fst = +prompt("enter a num")
var end = +prompt("enter 2nd num")
cel(fst, end);