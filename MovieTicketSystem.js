// 25. Movie Ticket System 
// Take: 
// age 
// numberOfTickets 
// Ticket prices: 
// Age below 12 → ₹100 
// Age 12–59    
// Age 60+      
// → ₹200 
// → ₹120 
// Calculate the total ticket price. 
// Example: 
// Age: 25 
// Tickets: 3 
// Total: ₹600 

let age = 67;
let numberOfTickets = 23;

if(age >= 0 && age <=12){
    console.log("Total: ₹",numberOfTickets*100);
}
else if(age >= 12 && age <= 59){
    console.log("Total: ₹",numberOfTickets*200);
}
else if(age >= 60){
    console.log("Total: ₹",numberOfTickets*120);
}
else {
    console.log("Invailid age")
}

