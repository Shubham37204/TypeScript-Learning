//oop

// class Person {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}`)
//     };
//     getName() {
//         return this.name
//     }
//     setName(name: string) {
//         this.name = name
//     }
// }

// class emp extends Person {
//     callMe() {
//         console.log(this.name);
//     }
// }
// const p1 = new Person("Tim");

// class Employee {
//   protected role: string = "Employee";

//   showRole() {
//     console.log(this.role);
//   }
// }

// class Manager extends Employee {
//   promote() {
//     this.role = "Manager";  // hardcoded promotion
//     console.log("Promoted to", this.role);
//   }
// }

// const mgr = new Manager();
// mgr.promote();      // ✅ Promoted to Manager
// mgr.showRole();     // ✅ Manager
// mgr.promote("Lead"); // ❌ Error: Expected 0 arguments, but got 1.

// class Employee {
//   protected role: string = "Employee";

//   showRole() {
//     console.log(this.role);
//   }
// }

// class Manager extends Employee {
//   promote(newRole: string) {
//     this.role = newRole;   // dynamic role update
//     console.log("Promoted to", this.role);
//   }
// }

// const mgr = new Manager();
// mgr.promote("Lead");     // ✅ Promoted to Lead
// mgr.showRole();          // ✅ Lead
//TODO oops , abstarct classes need to be seen once again
