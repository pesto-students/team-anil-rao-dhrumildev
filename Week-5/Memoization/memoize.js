const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

function memoize() {

    //declaring empty object cache
    const cache = {}

    return function (queryCity) {

        //check if city data is already cached
        if (cache[queryCity]) {
            return cache[queryCity]
        }

        if (!temperatureData[queryCity]) {
            return { message: "City data not available." }
        }

        //add city to cache if not exists
        cache[queryCity] = temperatureData[queryCity]
        return temperatureData[queryCity]
    }
}

const queryTemp = memoize()

console.log(queryTemp("Paris"))
console.log(queryTemp("New York"))
console.log(queryTemp("New York"))
console.log(queryTemp("Paris"))
