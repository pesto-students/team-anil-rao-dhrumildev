const allIndicesOfElement = (arr, opArr = [], ind, ipElement) => {
    //base case
    if (ind === arr.length) {
        return opArr
    }

    if (arr[ind] === ipElement) {
        opArr.push(ind)
    }
    return allIndicesOfElement(arr, opArr, ind + 1, ipElement)

}

console.log(allIndicesOfElement([1, 2, 3, 2, 4, 2, 5], [], 0, 2))