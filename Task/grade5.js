// Task 5: Grade system based on marks. 
// Objective 
// Use multiple conditions to assign grades. 
// Approach (How to Think) 
// 1. Identify ranges (descending order)  
// o 90+ → A  
// o 70+ → B  
// o 50+ → C  
// o Else → Fail  
// // 2. Always start from highest value 

 let marks = 95;

 if(marks>=90){
    console.log("student grade A");
 }else if (marks>=70){
    console.log("student grade B");
 }else if(marks>=50){
    console.log("student grade C");
 }else{
    console.log("stydent is fail" );
    
 }