//eg1
function adds(x: number, y: number): number {
    return x + y
}
adds(7, 8)

//eg2 with third parameter(middle) as optional
function makeName(first: string, seconds: string, middile?: string) {
    return first + "" + seconds
}
const name1 = makeName("shubham", "raman")

//eg2.1 third parameter(middle) as default parameter 
function makeName1(first: string, seconds: string, middile: string = "kumar") {
    return first + "" + seconds + "" + middile
}
const name2 = makeName("shubham", "raman", "sharma")

//eg3 calling a function inside a function ie makeName
function makeName2(first: string, seconds: string, middile: string = "kumar") {
    return first + "" + seconds
}
function callFunct(func: (f: string, l: string, s?: string) => string, p1: string, p2: string) {
    func(p1, p2)
}
callFunct(makeName2, "shubham", "raman")

//eg4
function mul(x: number, y: number): number {
    return x * y;
}
function div(x: number, y: number): number {
    return x / y;
}

// Accepts:
// - an array of functions: [(x, y) => number] ie [mul,div]
// - an array of value pairs: [[x1, y1], [x2, y2]] ie [1, 2], [4, 5],
function applyFunc(
    func: ((a: number, b: number) => number)[],
    values: [number, number][]
): number[] {
    const res: number[] = [];
    for (let i = 0; i < func.length && i < values.length; i++) {
        const [x, y] = values[i];
        res.push(func[i](x, y)); // apply each function to the corresponding pair
    }
    return res;
}

// ✅ Now pass 2 arguments only
const results = applyFunc([mul, div], [
    [1, 2],
    [4, 5],
]);

console.log(results); // [2, 0.8]
