function leap(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
const myYear = 2024;
const checkLeap = leap(myYear);
console.log(checkLeap);

const yourYear = 2033;
const result = leap(yourYear);
console.log(result)