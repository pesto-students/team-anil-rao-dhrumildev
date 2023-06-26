//please use npm init, install fetch package by npm install node-fetch, try to use node version 14 or above

import fetch from "node-fetch";


async function getExchangeRate(currencyCode) {

    let result;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch("https://api.exchangerate.host/latest", requestOptions)
    const jsonData = await response.json();

    if (jsonData.rates.hasOwnProperty(currencyCode)) {
        result = jsonData.rates[`${currencyCode}`]

        return { message: "Success", result: result.toFixed(4) }
    }
    return null
}


getExchangeRate('USD')
    .then((rate) => {
        console.log(rate); // Output: 1.2133
    })
    .catch((error) => {
        console.error(error);
    });


getExchangeRate('XYZ')
    .then((rate) => {
        console.log(rate); // Output: null
    })
    .catch((error) => {
        console.error(error);
    });