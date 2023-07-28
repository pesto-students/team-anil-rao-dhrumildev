const transposeMatrix = (matrix) => {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix
}

console.log(transposeMatrix([[1, 2, 3, 4], [5, 6, 7, 8]]))

