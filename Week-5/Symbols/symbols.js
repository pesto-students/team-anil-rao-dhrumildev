function createTxId() {
    let counter = 0;
    return function () {
        counter++
        return Symbol(`TRANSACTION_ID_${counter}`)
    }
}

const getTxId = createTxId();

const firstTx = getTxId();
console.log(firstTx)

const secondTx = getTxId();
console.log(secondTx)
