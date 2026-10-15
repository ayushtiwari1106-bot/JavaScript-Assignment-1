// 28. Simple ATM Menu 
// Create the following menu: 
// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 
// Use switch-case. 
// Rules: 
// ● Check Balance → Display current balance 
// ● Deposit → Add money to balance 
// ● Withdraw → Check whether sufficient balance exists 
// ● Exit → Display a goodbye message 
// ● Invalid choice → Display an error message 

//****************************************************/
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/

let balance = 20000;
let Deposit = 15000;
let withdrawal = 10000;
let Check = 1;

// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 

switch (Check){
    case 1:
        console.log(balance);
        break;
    case 2:
        console.log("Deposite amount",Deposit,"Available amount",balance+Deposit) ;
        break;
    case 3:
        if(withdrawal<=balance){
            console.log("withdraw successful Thank you");
        } 
        else{
            console.log("Insufficient balance");
        } 
        break;    
    case 4:
        console.log("Exit");
        break;
    default:
        console.log("Invailid choice error")       
}
