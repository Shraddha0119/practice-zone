// : Use map to double values. 
// Objective 
// Learn how to: 
//  Transform array  
//  Create new array  
// Approach (How to Think) 
// 1. You don’t want to change original array  
// 2. Apply operation on each element  
// 3. Return new array

let arr = [1,2,3,4,56,]
console.log(arr);

let double = arr.map((num)=>{
     return num*2;
})
console.log("doublearr:",double);


// // Step 1: original array
// let numbers = [1, 2, 3, 4];

// console.log("Original:", numbers);

// // Step 2: use map
// let doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log("Doubled:", doubled);