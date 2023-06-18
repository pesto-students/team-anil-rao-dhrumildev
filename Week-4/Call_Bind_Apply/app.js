class Calculator {

    //add two numbers
    add(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }
        return (num1 + num2)
    }

    //subtract two numbers
    subtract(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }

        return (num1 - num2)
    }

    //multiply two numbers
    multiply(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }

        return (num1 * num2)
    }

    //divide two numbers
    divide(num1, num2) {

        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }

        return (num1 / num2)
    }
}

//extending Calculator class
class ScientificCalculator extends Calculator {

    //squaring the number
    square(num) {
        return (num * num)
    }

    //cube of the number
    cube(num) {
        return (num * num * num)
    }

    power(num, power) {

        if (isNaN(num) || isNaN(power)) {
            return { message: "Please enter valid number." }
        }

        return (Math.pow(num, power))
    }
}

const scInstance = new ScientificCalculator();

//call method to invoke add
scInstance.add(10, 5).call()



