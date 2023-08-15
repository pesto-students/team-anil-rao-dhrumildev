const checkForDuplicates = (arr) => {

    let obj = {}
    
    for (let a in arr) {

        if (!obj[arr[a]]) {
    
            obj[arr[a]] = 1

        } else {
    
            return "There are duplicate elements in the array."
    
        }

    }
    
    return "There are no duplicate elements in the array."

}

console.log(checkForDuplicates([1, 2, 3, 4, 5, 1]))

console.log(checkForDuplicates([10, 20, 30, 40, 50]))