
function sumOfArray(arr, n) {
    if (n <= 0) {
        return 0;
    }
    

    return sumOfArray(arr, n - 1)+arr[n-1]
}
const arr = [1, 2, 3, 4, 5]
const n = arr.length


console.log(sumOfArray(arr, n))