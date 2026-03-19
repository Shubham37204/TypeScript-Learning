//Optional chaining
const arr5 = [
    { name: "tim" },
    { name: "joe" },
    { name: "jane" }
]

const el = arr5.pop()?.name 
//arr5.pop() → [ { name: "jane" } ]
//{ name: "jane" }.name → "jane"

const arr6 = [[{ name: "tim" }]]
const el1 = arr6.pop()?.pop()?.name  
//arr6.pop() → [ { name: "tim" } ]
//[ { name: "tim" } ].pop() → { name: "tim" }
//{ name: "tim" }.name → "tim"


const el2 = arr6.pop()!.pop()!.name //it is saying that the value is not null or undefined ie it must have some value same explanation as mentioned above

