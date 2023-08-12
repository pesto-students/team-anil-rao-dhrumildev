function findMaxVowelAndConsonants(arr) {
    let maxLen = 0
    let vowelCount = 0
    let consonantCount = 0


    for (let a in arr) {
        if ((arr[a] != "a") && (arr[a] != "e") && (arr[a] != "i") && (arr[a] != "o") && (arr[a] != "u") && (arr[a] != "A") && (arr[a] != "E") && (arr[a] != "I") && (arr[a] != "O") && (arr[a] != "U")) {
            consonantCount = consonantCount + 1
        } else {
            vowelCount = vowelCount + 1
        }
    }

    let minLength = Math.min(vowelCount, consonantCount)

    maxLen = minLength * 2
    return maxLen
}

console.log(findMaxVowelAndConsonants(["a", "b", "c", "d", "e", "i", "o", "u", "i", "o", "p"]))

console.log(findMaxVowelAndConsonants(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]))