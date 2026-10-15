// 27. Electricity Bill + Discount 
// Take the electricity units consumed. 
// Calculate the bill using: 
// 0–100       → ₹5/unit 
// 101–200     → ₹7/unit 
// Above 200   → ₹10/unit 
// Then apply: 
// Bill >= ₹2000 → 10% discount 
// Otherwise     → No discount 
// Display: 
// Units 
// Original Bill 
// Discount 
// Final Bill 

let unit = 67;

if(unit>0 && unit<=100){
    bill = unit*5;
}
else if(unit>100 && unit<=200){
    bill = unit*7;
}
else {
    bill = unit*10;
}

if (bill >= 2000){
    discount = bill*10/100;
}
else {
    discount = 0;
}

let finalBill = bill - discount;

console.log("Units",unit);
console.log("Original Bill",bill);
console.log("Discount",discount);
console.log("Final bill",finalBill);
