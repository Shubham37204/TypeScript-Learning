//rest parameter
//Collects all arguments passed into the function.nums becomes an array of all arguments.
function sum(a: string, ...nums: number[]) {
    return nums.reduce((a, b) => a + b, 0);
}

sum("hi")
sum("heelo", 2, 3)

//overloading fuction

function getItemLength(name: string): number;
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames: unknown): number {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    } else if (Array.isArray(nameOrNames)) {
        return nameOrNames.length;
    }
    return 0;
}
getItemLength("hello");
getItemLength(["hi", "hello"]);

