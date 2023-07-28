const twoMatrixSum = (rowsOne, columnsOne, arrOne, rowsTwo, columnsTwo, arrTwo) => {

    let firstArray = []
    let final2dArray = []

    if ((rowsOne != rowsTwo) || (columnsOne != columnsTwo)) {
        return { message: "Both array should be of equal size." }
    }

    for (let i in arrOne) {
        firstArray = []
        for (let j in arrOne[i]) {
            firstArray.push(+arrOne[i][j] + (+arrTwo[i][j]))
        }
        final2dArray.push(firstArray)
    }

    return final2dArray
}


console.log(twoMatrixSum(2, 3, [[1, 2, 3], [4, 5, 6]], 2, 3, [[7, 8, 9], [10, 11, 12]]))