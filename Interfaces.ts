//An interface in TypeScript is a way to define the shape (or structure) of an object.
//It tells the compiler what properties and methods an object must have.

//eg1
interface Person {
    name: string;
    age: number;
    height?: number;
    hello: () => void;
}
const person: Person = {
    name: "tim",
    age: 23,
    hello: function () {
        console.log(this.name +
            " says hi")
    }
}
person.hello()

//eg2
interface Human {
    name: string;
    age: number;
    height?: number;
}
interface Employee {
    employeeId: number;
}
interface Manager extends Employee, Human {
    employees: Human[] // array of people
}
//Now creating a manager object:
const manager: Manager = {
    name: "Alice",
    age: 40,
    employeeId: 101,
    employees: [
        { name: "Bob", age: 25 },
        { name: "Carol", age: 30, height: 165 }
    ]
};

//eg3
interface Person1 {
    name: string;
    age: number;
    height?: number;
}

function getPerson(p: Person1): Person1 {
    return {
        name: "Tim",
        age: 23
    }
}

console.log(getPerson);
