//named export ways
//a) export used before function
//b) export {muls,divs}

//eg1
export function muls(x: number, y: number): number {
    return x * y;
}
export function divs(x: number, y: number): number {
    return x / y;
}

//default export

//eg1
// function test(){
//     return "test"
// }

// export default test;

//eg2
export default function log(message: string) {
  console.log("LOG:", message);
}
