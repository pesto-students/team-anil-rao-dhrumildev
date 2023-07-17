//recursion

function towerOfHanoi(n, start, dest, temp) {
    if (n === 1) {
        console.log(`Move disk 1 from ${start} to ${dest}`)
    } else {
        towerOfHanoi(n - 1, start, temp, dest)
        console.log(`Move disk ${n} from ${start} to ${dest}`)
        towerOfHanoi(n - 1, temp, dest, start)
    }
}
towerOfHanoi(4, 'rod1', 'rod3', 'rod2')