"use strict"
let firstValues = [];
let secondValues = [];
let count = 0

function counter() {

    return counterReturns()
}

const counterReturns = () => {
    count++
    firstValues.push(count)
    secondValues.push(count)

    return count
}

//Section for first values. Keep it commented if checking second values.
//calling firstCounter five times
let firstCounter = new counter()
firstCounter = new counter()
firstCounter = new counter()
firstCounter = new counter()
firstCounter = new counter()

console.log(firstValues)

//Section for second values. Keep it commented if checking first values.
//calling secondCounter five times
let secondCounter = counter()
secondCounter = new counter()
secondCounter = new counter()

console.log(secondValues)
