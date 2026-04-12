 
//  Task 4: Age checker (Minor, Adult, Senior). 
// Objective 
// Use if/else to classify age into categories. 
// Approach (How to Think) 
// 1. Identify ranges 
// o < 18 → Minor  
// o 18–60 → Adult  
// o > 60 → Senior  
// 2. Always check from top to bottom logically  
// // 3. Use if → else if → else
 
 
 
 
 let age = 18;

 if(age<=18){
    console.log("minor");
 }else if (age<=25){
    console.log("Adult");
 }else{
    console.log("Senior");
 }