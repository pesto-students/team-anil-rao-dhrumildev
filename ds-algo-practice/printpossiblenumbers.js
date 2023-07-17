function printPossibleNumbers(i, n, current) {
    if (i === n) {
        console.log(current)
        return;
    }

    current[i] = 2;
    printPossibleNumbers(i + 1, n, current)

    current[i] = 1;
    printPossibleNumbers(i + 1, n, current)
}
const n = 3;
const current = new Array(n);
printPossibleNumbers(0, n, current)