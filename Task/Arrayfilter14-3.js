// : Use filter to get values > 2. 
// Objective 
// Learn how to: 
//  Filter elements based on condition  
// Approach (How to Think) 
// 1. Check each element  
// 2. Keep only those matching condition

let number = [1,2,3,4,5,6];

console.log(number);

let filter = number.filter((num)=>{
     return num>2;
})
  
console.log("filter>2",filter);

