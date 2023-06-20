
//Protecting the Object

const person = {
    name: "John Doe",
    age: 29,
    email: "john@email.com",
    getAge() {
        return this.age
    },

    setAge(age) {
        this.age = age
    }
}

Object.defineProperties(person, {
    name: {
        writable: false
    },
    email: {
        writable: false
    },
    age: {
        writable: true,
        configurable: false
    }
})


// JavaScript Prototype

function Vehicle() {
    this.make = "Hyundai"
    this.year = 2017
    this.model = "Creta"
    // make: "Hyundai",
    // model: "Creta",
    // year: 2017
}

Vehicle.prototype.getDetails = function () {
    return `${this.make}, ${this.model}, ${this.year}`
}

class Car extends Vehicle {
    super(make, model, year) { }
    numDoors = 5
    getDetails() {
        return `${this.make}, ${this.model}, ${this.year}, ${this.numDoors}`
    }
}

const vehicleInstance = new Vehicle()
console.log(vehicleInstance.getDetails())

const carInstance = new Car()
console.log(carInstance.getDetails())