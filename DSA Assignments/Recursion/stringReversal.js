
function reverseTheString(str, n) {

    if (n <= 0) {

        return '';
    }

    return str[n - 1] + reverseTheString(str, n - 1)
}

const str1 = "hello"
const len1 = str1.length
console.log(reverseTheString(str1, len1))



const str2 = "racecar"
const len2 = str2.length
console.log(reverseTheString(str2, len2))