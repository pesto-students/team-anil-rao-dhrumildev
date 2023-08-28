    function powerSet(arr, index, curr) {

        let n = arr.length;
        // base case
        if (index == n) {
            console.log(curr);
            return;
        }


        powerSet(arr, index + 1, curr + arr[index]);

        powerSet(arr, index + 1, curr);
    }

    // Driver code
    let arr = [1,2,3];
    let index = 0;
    let curr = "";
    powerSet(arr, index, curr);


// function fib(n) {
//     //base case
//     if (n == 0 || n == 1) {
//         return 1
//     }

//     return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(444))