// Create variables for: 
// ● Product price 
// ● Quantity 
// Calculate the total bill. 

const ProductPrice = 78;
const Quantity = 11;

totalBill = ProductPrice*Quantity;
discount = totalBill*10/100;
finalPrice = totalBill-discount;

console.log("Original Bill");
console.log(totalBill);

console.log("Discount amount");
console.log(discount);

console.log("Final price");
console.log(finalPrice);
