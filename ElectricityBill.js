// 15. Electricity Bill 
// Take the number of units consumed. 
// Calculate the bill using: 
// 0–100 units     → ₹5 per unit 
// 101–200 units   → ₹7 per unit 
// Above 200       → ₹10 per unit 
// Example: Units = 250 
// First 100  → 100 × 5 
// Next 100   → 100 × 7 
// Remaining  → 50 × 10 
// Display the final bill. 

let units = 156;

if(units>=0 && units<=100){
    console.log("Final bill =",units*5)
}
else if(units>100 && units<=200){
    console.log("Final bill =",100*5 + (units - 100) *7)
}
else if(units>200){
    console.log("Final bill =",100*5 + 100*7 +(units - 200) *10)
}
else{
    console.log("Invailid units enter please enter a vailid unit number")
}