const getSubArrays = (arr, n) => {
    
    let maxProduct = 1
    let product = 1
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {

            product = 1

            for (let k = i; k <= j; k++) {
                product = product * arr[k]
            }

            if (maxProduct <= product) {
                maxProduct = product
            }
        }

    }

    return maxProduct
}


console.log(getSubArrays([6, -3, -10, 0, 2], 5))