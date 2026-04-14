// Task 1: Create variables using var, let, const. Try redeclaration and updates. 
// Objective 
// Understand: 
//  Redeclaration  
//  Updating values  
//  Scope behavior  
// Approach (How to Think) 
// When solving this: 
// 1. Start simple → create variables with all 3 keywords  
// 2. Test rules one by one:  
// o Can I redeclare it?  
// o Can I update it?  
// 3. Break it intentionally → errors help learning  
// 4. Use console.log() after every step


// <!-- 1.var -->

var name = "shraddha";
console.log("var first value:", name);


// Update //
name = "gunjkar";
console.log("var updated value:", name);

// redeclare //
var name = "Developer";
console.log("var redeclared value:", name);


// 2. let

let city = "mumbai";
console.log("let first value:", city);

// update value
city = "pune";
console.log("let updated value:", city);

// let city = "delhi"(redclare) gives error


// 3.const

const country = "India";
console.log("const first value:", country);

// updated value
// country="usa";
// console.log("const updated value:", country);gives error

// const country = "canada"(redclare) gives error


