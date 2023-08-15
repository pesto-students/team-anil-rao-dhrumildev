
const maxPointsOnLine = (arr) => {
    let myMap = new Map()
    myMap.set("isPoint", 0)

    for (let i in arr) {
        if (arr[i][0] === arr[i][1]) {
            myMap.set("isPoint", myMap.get("isPoint") + 1)
        }
    }

    return myMap.get("isPoint")
}

console.log(maxPointsOnLine([[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]]))
console.log(maxPointsOnLine([[1, 1], [2, 2], [3, 3]]))