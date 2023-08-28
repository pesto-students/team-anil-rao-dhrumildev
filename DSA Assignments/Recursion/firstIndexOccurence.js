
function firstIndex(arr, targetValue, currIndex = 0) {

    if (currIndex === arr.length) {
        return -1
    }

    if (arr[currIndex] === targetValue) {
        return currIndex
    }

    return firstIndex(arr, targetValue, currIndex + 1)
}

console.log(firstIndex([1, 2, 3, 4, 5], 3))

console.log(firstIndex([1, 9, 10, 4, 5], 12))