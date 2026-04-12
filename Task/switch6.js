// Task 6: Day finder using switch. 
// Objective 
// Use switch for fixed values. 
// Approach (How to Think) 
// 1. Use switch when:  
// o Values are fixed (1–7)  
// 2. Each case represents one value  
// 3. Always use break to stop execution 


let day = 1;

// switch (day){
//     case 1 :
//     console.log("monday");
//     break;

//     case 2 :
//     console.log("tuesday");
//     break;

//     case 3:
//     console.log("wednesday");
//     break;
    

//     default :
//     console.log("invalid day");
    
// }

switch(day){
    case 1:
        console.log("monday");
    case 2:
        console.log("friday");  
}
// Tuesday
// Wednesday

// 👉 Why?
// Because without break, it keeps running next cases (called fall-through)