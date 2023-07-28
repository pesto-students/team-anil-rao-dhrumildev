function replaceElements(str, occurance, replacement) {
    let array = str.split(',')
    array = array.map(function (ele) {
        return ele.replace(occurance, replacement);
    })

    return array
}

console.log(replaceElements('1,2,3,2,4,2,5', '2', '6'))