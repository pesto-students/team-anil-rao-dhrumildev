// Your solution goes here 
let playGuessingGame = (numToGuess, totalGuesses) => {
    try {
        let guessedNumber;
        totalGuesses = totalGuesses || 10;
        let guessCount = 0;

        for (let a = 0; a < totalGuesses; a++) {

            //first-prompt section
            if (guessCount == 0) {
                guessedNumber = prompt("Enter a number between 1 and 100.");

                if (isNaN(guessedNumber) || guessedNumber == "") {
                    guessedNumber = prompt("Please enter a number.");

                }
                guessCount++

            } else {

                //perfect guess section
                if (guessedNumber == numToGuess) {
                    return guessCount
                }

                //smaller guess section
                if (guessedNumber && guessedNumber < numToGuess) {
                    guessedNumber = prompt(`${guessedNumber}  is too small. Guess a larger number.`);

                    if (isNaN(guessedNumber) || guessedNumber == "") {
                        guessedNumber = prompt("Please enter a number.");
                    } else {
                        guessCount++
                    }

                }

                //greater guess section
                if (guessedNumber && guessedNumber > numToGuess) {
                    guessedNumber = prompt(`${guessedNumber} is too large. Guess a smaller number.`);

                    if (isNaN(guessedNumber) || guessedNumber == "") {
                        guessedNumber = prompt("Please enter a number.");
                    } else {
                        guessCount++
                    }

                }

            }
        }

        //false input or guess exceed section
        if (!guessedNumber || (guessCount >= (totalGuesses - 1))) {
            return 0
        }
    } catch (error) {
        return { messagee: error }
    }

}

