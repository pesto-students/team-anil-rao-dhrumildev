
const getFirstNonRepeatingChar = (str) => {
    let myMap = new Map()

    for (let i = 0; i < str.length; i++) {
        if (!myMap.has(str[i])) {
            myMap.set(str[i], 1)
        } else {
            myMap.set(str[i], (myMap.get(str[i]) + 1))
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (myMap.get(str[i]) == 1) {
            return str[i]
        }
    }
}

console.log(getFirstNonRepeatingChar("abcdabcde"))

console.log(getFirstNonRepeatingChar("aabbccd"))

console.log(getFirstNonRepeatingChar("geeksforgeeks"))