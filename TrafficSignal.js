// 23. Traffic Signal 
// Take a traffic signal color: 
// "red" 
// "yellow" 
// "green" 
// Use switch-case. 
// Display:  
// red    → Stop 
// yellow → Wait 
// green  → Go 
// For any other value: 
// Invalid signal 

let signalColor = "yellow";

switch(signalColor){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break; 
    case "green":
        console.log("Go");
        break;    
    default:
        console.log("Invailid signal")   ;    
}