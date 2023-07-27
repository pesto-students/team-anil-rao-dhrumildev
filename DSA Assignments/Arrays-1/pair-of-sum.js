function pairsOfSum(str, sum) {
    const arr = str.split(',')
    let arrayOfPairs = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j], +arr[i] + (+arr[j]))

            if (+arr[i] + (+arr[j + 1]) === sum && +arr[i] != +arr[j + 1]) {
                arrayOfPairs.push([+arr[i], +arr[j + 1]])
                break;
            }
        }
    }
    return arrayOfPairs
}

console.log(pairsOfSum('2,4,6,8,10', 12))
