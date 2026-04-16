// Task 16: Create student object, update and add keys. 
// Objective 
// Learn how to: 
//  Create an object  
//  Access values  
//  Update existing properties  
//  Add new properties  
// Approach (How to Think) 
// 1. Object = collection of key-value pairs  
// 2. Steps:  
// o Create object  
// o Access data  
// o Modify existing key  

let student = {
    name :"megha",
    age:23,
    cource:"bteach"
};

console.log("original object:",student)

//  access data
console.log("Name:",student.name);
console.log("age:",student["age"]);
console.log("cource:",student.cource);

// update existing property

student.age = 27;
console.log("upadated age:",student);


// add new obj
student.grade = "A";
console.log("add new object:",student);


