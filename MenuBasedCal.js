// 22. Menu-Based Calculator 
// Create this menu: 
// 1. Addition 
// 2. Subtraction 
// 3. Multiplication 
// 4. Division 
// 5. Modulus 
// Take the user’s choice and two numbers. 
// Use switch-case to perform the selected operation.



let firstNum =  78;
let SecondNum = 89;
let operator = "*";

switch (operator) {
    case "+":
        console.log(firstNum + SecondNum);
        break;
    case "-":
        console.log(firstNum - SecondNum);
        break;
    case "*":
        console.log(firstNum * SecondNum);
        break;
    case "/":
        console.log(firstNum / SecondNum);
        break;
    case "%":
        console.log(firstNum % SecondNum);
        break;

    default:
        console.log("Invailid")

}
