//A year is leap if it is divisible by 4 or 400 and not divisible by 100 
function isLeapYear(year) {
    if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
        console.log("yes")
    } else {
        console.log("no")
    }
    
}

console.log(isLeapYear(2016))