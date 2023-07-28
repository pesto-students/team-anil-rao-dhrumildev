function sumMaxMin(str) {
    let arr = str.split(' ')
    let minValue = +arr[0]
    let maxValue = +arr[0]

    for (let i = 0; i < arr.length; i++) {

        if (+arr[i] < minValue) {
            minValue = +arr[i]
        }

        if (+arr[i] > maxValue) {

            maxValue = +arr[i]
        }
    }

    return minValue + maxValue
}

console.log(sumMaxMin('2 1 1 3 4 2 4 4 9'))