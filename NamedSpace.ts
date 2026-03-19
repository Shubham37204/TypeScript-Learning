// A namespace is a way to group related variables, functions, classes, or interfaces under one name, so they don't pollute the global scope.

//eg1
namespace Utils {
    export class MyClass { }
    export function myFunc() { }
    export const NAME = "Shubham";
    export interface NewType {
        name: string
    }
}

const res1 = Utils.NAME
const res2: Utils.NewType = { name: Utils.NAME }