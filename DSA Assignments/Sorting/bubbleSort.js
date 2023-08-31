const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {

        for (let a = 0; a < arr.length - i - 1; a++) {

            if (arr[a] > arr[a + 1]) {
                let temp = arr[a + 1]
                arr[a + 1] = arr[a]
                arr[a] = temp

            }
        }
    }


    return arr
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))