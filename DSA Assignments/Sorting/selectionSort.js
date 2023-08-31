const selectionSort = (arr) => {


    for (let i = 0; i < arr.length; i++) {
        let min_idx = i
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[min_idx]) {
                min_idx = j

                swap(arr, min_idx, i)
            }
        }

    }

    return arr
}
const swap = (arr, i, j) => {

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(selectionSort(["banana","apple","grape","cherry"]))

