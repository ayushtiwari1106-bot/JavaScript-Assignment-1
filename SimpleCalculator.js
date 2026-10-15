// 20. Simple Calculator 
// Take: 
// ● First number 
// ● Second number 
// ● Operator 
// Supported operators: 
// + - 
// * 
// / 
// % 
// Use switch-case. 
// Example: 
// First number: 20 
// Second number: 5 
// Operator: * 
// Output: 100 

let firstNum = 88;
let SecondNum = 9;
let operator = "/" ;

switch(operator){
    case "+":
        console.log(firstNum+SecondNum);
        break;
    case "-":
        console.log(firstNum-SecondNum); 
        break;
    case "*":
        console.log(firstNum*SecondNum);
        break; 
    case "/":
        console.log(firstNum/SecondNum);
        break;
    case "%":
        console.log(firstNum%SecondNum);
        break;

    default:
        console.log("Invailid")        

}