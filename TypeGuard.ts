//eg : type,typeof and in are some type guards

//eg1
type stringOrnumber1 = string | number

function add(values: stringOrnumber1): stringOrnumber1 {
    if (typeof values === 'string') {
        return values + "1"
    } else {
        return values + 1
    }
}

console.log(add(5))

//eg2
class Dog {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastname: string) {
        this.firstName = firstName; this.lastName = lastname
    }
}
class Cat {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

function getName(animal: Cat | Dog) {
    if (animal instanceof Cat) {
        //if (isDog(animals))
        console.log(animal.firstName);
    } else {
        console.log(animal.firstName + "" + animal.lastName);
    }
}

//eg3:custom type guard
function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).lastName !== undefined
}
//  (pet: Dog | Cat)
// This is the parameter of the function
// It means animal can be either a Dog or a Cat

// 🔹 : pet is Dog
// This is the most important part.
// This is the return type of the function
// It doesn’t return Dog — instead, it tells TypeScript:
// “If this function returns true, then the pet is a Dog.”
// ✅ This is what makes it a custom type guard.

// 🔹 return (pet as Dog).lastName !== undefined;
// This is the actual logic inside the function:
// (pet as Dog) is a type assertion — you're temporarily saying
//  "Treat this pet like a Dog."
// .lastName — only Dogs have lastName, not Cats.
// So if lastName is not undefined, we assume it’s a Dog.
// ✅ If lastName exists, then it's a Dog.
// ❌ If it doesn't, it's a Cat.

