// 26. Restaurant Menu 
// Create the following menu: 
// 1. Burger  → ₹150 
// 2. Pizza   → ₹250 
// 3. Pasta   → ₹180 
// 4. Sandwich → ₹120 
// Take the customer’s choice and quantity. 
// Use switch-case to calculate the total price. 
// Example: 
// Choice: 2 
// Quantity: 3 
// Total: ₹750 


//****************************************
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let choice = 2;
let quantity = 5;

// 1. Burger  → ₹150 
// 2. Pizza   → ₹250 
// 3. Pasta   → ₹180 
// 4. Sandwich → ₹120 

switch(choice){
    case 1:
        console.log(quantity,"Burger","Total ₹",150*quantity);
        break;
    case 2:
        console.log(quantity,"Pizza","Total ₹",250*quantity);
        break; 
    case 3:
        console.log(quantity,"Pastar","Total ₹",180*quantity);
        break;
    case 4:
        console.log(quantity,"Sandwich","Total ₹",120*quantity);
        break;  
    default:
        console.log("Ham log ye nahi banate hai bhai")             
}

