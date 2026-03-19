//Literals
let direction: 'north' | 'south' | 'east' | 'west'
let response: 200 | 404
let responseCode: true;

//enum
//By default, enums assign numeric values starting from 0.

//eg1
enum Size {
    Small,
    Medium,
    Large
}

// enum Size {
//   Small=10,
//   Medium=20,
//   Large=30
// }

// enum Size {
//   Small=1,
//   Medium,
//   Large
// }

var size: Size = Size.Small;
if (size === Size.Small) {
    //do something
}

//eg2
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
enum Description {
    SmallText = "this is some sub text to"
}
console.log(Direction.Down);
console.log(Description.SmallText)
