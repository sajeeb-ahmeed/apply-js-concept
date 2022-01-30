function leap(year) {

    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
const myYear = 2100;
const checkLeap = leap(myYear);
console.log(checkLeap);

const yourYear = 2032;
const result = leap(yourYear);
console.log(result)