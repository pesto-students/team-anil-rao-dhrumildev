class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}`
    }
}

const instanceOne = new Person("Dj", 29, "male", "Indian")
console.log(instanceOne.introduce())

const instanceTwo = new Person("Dhrumil", 29, "male", "Indian")
console.log(instanceTwo.introduce())

const instanceThree = new Person("Megha", 30, "female", "Indian")
console.log(instanceThree.introduce())

class Student extends Person {
    constructor(name, age, gender, nationality,subject) {
        super(name, age, gender, nationality);
        this.subject = subject
    }

    study() {
        return "I am studying "+this.subject;
    }
}

const studentInstance = new Student("New User",18,"Male","American","Maths")
console.log(studentInstance.introduce())
console.log(studentInstance.study())