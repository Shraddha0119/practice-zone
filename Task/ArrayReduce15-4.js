//  Use reduce to find sum. 
// Objective 
// Learn how to: 
//  Convert array → single value  
// Approach (How to Think) 
// 1. You need:  
// o accumulator (store result)  
// o current value  
// 2. Combine values step by step

//  let arr = [23,45,67,89];

//  console.log("arr",arr);

//  let reduce = arr.reduce((a,b)=>{
//     return sum=a+b;
//  });

//  console.log("reduce to find sum:", reduce);

 let arr = [23,45,67,89];

 console.log("arr",arr);

 let reduce = arr.reduce((acc,cur)=>{
    return acc+cur;
 },0);

 console.log("reduce to find sum:", reduce);
 
 