//  try-catch error handling. 
// Objective 
// Learn how to: 
//  Handle runtime errors  
//  Prevent app crash  
// Approach (How to Think) 
// 1. Wrap risky code inside try  
// 2. If error occurs → catch handles it

// risky code
try {
    let result = 10 / x; // x is not defined
    console.log(result);
} 
catch (error) {
    console.log("Error occurred:", error.message);
}