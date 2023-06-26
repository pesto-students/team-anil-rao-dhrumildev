//Section 1 - Inheritance

class Vehicle {
    constructor(make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }

    drive() {
        console.log("Driving " + this.make + " " + this.model + ".")
    }

}

class Car extends Vehicle {
    super(make, model, year, color, numSeats) {
        this.numSeats = numSeats
    }
}

class RideShareCar extends Car {
    super(make, model, year, color, isAvailable) {
        this.isAvailable = isAvailable
    }

}


//Section 2 - Polymorphism

class Shape {
    calculateArea() { }
}

class Rectangle extends Shape {

    calculateArea(width, height) {
        return (width * height)
    }
}

class Triangle extends Shape {

    calculateArea(base, height) {
        return (base * height) / 2
    }

}

class Circle extends Shape {

    calculateArea(radius) {
        return (Math.PI * radius * radius)
    }

}

const rectangleInstance = new Rectangle()
console.log(rectangleInstance.calculateArea(50, 20))

const triangleInstance = new Triangle()
console.log(triangleInstance.calculateArea(30, 50))

const circleInstance = new Circle()
console.log(circleInstance.calculateArea(10))


// Section 3 – Abstraction and encpasulation

class BankAccount {
    #accountNumber;
    #balance = 0;
    #accountHolderName;

    get privateProperty() {
        return this.#balance;
    }

    set privateProperty(value) {
        this.#balance = value;
    }
}

class CheckingAccount extends BankAccount {
    deposit(amount) {
        console.log("step0", amount, super.privateProperty)
        super.privateProperty = super.privateProperty + amount
        return (super.privateProperty )
    }
    withdraw(amount) {
        super.privateProperty = super.privateProperty - amount

        return (super.privateProperty)

    }
    getBalance() {
        return super.privateProperty
    }
}

class SavingsAccount extends BankAccount {
    deposit(amount) {
        super.privateProperty = super.privateProperty + amount

        return (super.privateProperty )

    }
    withdraw(amount) {
        if (super.privateProperty > 0) {
            super.privateProperty = super.privateProperty - amount

            return (super.privateProperty)
        }
    }

    getBalance() {
        return super.privateProperty
    }
}

const cAccountInstance = new CheckingAccount()
console.log(cAccountInstance.deposit(10))
console.log(cAccountInstance.withdraw(3))
console.log(cAccountInstance.getBalance())

const sAccountInstance = new CheckingAccount()
console.log(sAccountInstance.deposit(20))
console.log(sAccountInstance.withdraw(6))
console.log(sAccountInstance.getBalance())