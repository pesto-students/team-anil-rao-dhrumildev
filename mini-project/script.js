// const API_ENDPOINT = "https://api.openai.com/v1/images/generations";
// const ACCESS_TOKEN = "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";

// const { Configuration, OpenAIApi } = require("openai");
// import * as fetch from 'node-fetch'
let fetch = globalThis ?.fetch;

if (!fetch && process ?.versions ?.node) {
    fetch = (await import('node-fetch')).default;
}

const API_KEY = "cUeU2q2TB9vmisjCibRxJQ==br2r4MUV0RFR91fN";
const topicInput = document.querySelector("#topic-input");
const generateButton = document.querySelector("#generate-button");
const quotesContainer = document.querySelector("#quotes-container");
const orderedList = document.getElementById('orderedList');


// Define event listener for the generate button
generateButton.addEventListener("click", async () => {
    const topic = topicInput.value;
    console.log("====",topic)
    const quotes = await memoizedQuotes(topic);
    let sepQuotes = []
    quotes.forEach(e => {
        sepQuotes.push({ quote: e.quote })
    })
    console.log("===>>>>", sepQuotes)
    displayQuotes(sepQuotes);
});


async function fetchQuotes(search, count = 5) {

    const API_ENDPOINT = "https://api.api-ninjas.com/v1/quotes?category=";
    const headers = {
        'X-Api-Key': API_KEY,
        "Content-Type": "application/json",

    }


    const requestOptions = {
        method: 'GET',
        headers
    };

    const res = await fetch(`${API_ENDPOINT}${search}&limit=${count}`, requestOptions)

    return res.json()

}


function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const memoizedQuotes = memoize(fetchQuotes);

// Define function to display quotes on the page
function displayQuotes(quotes) {

    orderedList.innerHTML = "";
    quotes.forEach((quote) => {
        const quoteElement = document.createElement("li");
        quoteElement.classList.add("quote");
        quoteElement.innerText = quote.quote;
        orderedList.appendChild(quoteElement);
    });
}