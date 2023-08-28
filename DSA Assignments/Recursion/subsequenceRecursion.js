
const subsequenceUsingRecursion = (arr, resultantArr, ind) => {
    //base case
    if (ind === arr.length) {
        console.log(resultantArr)
        return;
    }

    subsequenceUsingRecursion(arr, resultantArr, ind + 1)
    resultantArr.push(arr[ind])

    subsequenceUsingRecursion(arr, resultantArr, ind + 1)
    resultantArr.pop()
    return
}


let arr = "abc";

// Auxiliary space to store each path
let path = new Array();

subsequenceUsingRecursion(arr, path, 0);
