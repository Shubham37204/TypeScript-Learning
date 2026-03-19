//any 
let x1 : any = 1;

//unknown
let data: unknown = "hello";

//❌ data.toUpperCase(); // Error: Not allowed directly

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ Safe after check
}

//typecast
let s: unknown = 1;
const result = (s as
    number) + 1 //casting s to number and then add it
const result1 = (s as number[][])[0][1]
