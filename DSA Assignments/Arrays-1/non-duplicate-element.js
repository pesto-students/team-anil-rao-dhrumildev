function fetchNonDuplicate(arrayOfNumbers) {
    let frequencyObject = {}

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        frequencyObject[arrayOfNumbers[i]] = frequencyObject[arrayOfNumbers[i]] ? (frequencyObject[arrayOfNumbers[i]] + 1) : 1
    };

    return Object.keys(frequencyObject).find(key =>
        frequencyObject[key] === 1);

}

console.log(fetchNonDuplicate([5, 2, 3, 8, 2, 3, 5]))