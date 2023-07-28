function intersectionOfArrays(firstStr, secondStr) {
    let firstArray = new Set(firstStr.split(','))
    let secondArray = secondStr.split(',')
    let mergedArray = []

    for (let i = 0; i < secondArray.length; i++) {
        if (firstArray.has(secondArray[i])) {

            mergedArray.push(secondArray[i])
        }
    }

    return mergedArray

}

console.log(intersectionOfArrays('1,2,3,4,5', '3,4,5,6,7'))
