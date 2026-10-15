// 17. Salary Bonus 
// Take an employee’s: 
// ● Salary 
// ● Years of experience 
// Bonus rules: 
// Experience >= 10 years → 20% bonus 
// Experience >= 5 years  → 10% bonus 
// Experience >= 2 years  → 5% bonus 
// Below 2 years          
// Calculate and display: 
// ● Original salary 
// ● Bonus 
// ● Final salary 

let salary = 30000;
let exp = 1;

if(exp >= 10){
    bonus = salary*20/100;
    total = salary + bonus;
    console.log("Original salary",salary);
    console.log("Bonous",bonus);
    console.log("Final salary",total)
    
}
else if(exp >= 5){
    bonus = salary*10/100;
    total = salary + bonus;
    console.log("Original salary",salary);
    console.log("Bonous",bonus);
    console.log("Final salary",total)
}
else if(exp >= 2){
    bonus = salary*5/100;
    total = salary + bonus;
    console.log("Original salary",salary);
    console.log("Bonous",bonus);
    console.log("Final salary",total)
}
else{
    bonus = "No bonus";
    total = salary;
    console.log("Original salary",salary);
    console.log("Bonous",bonus);
    console.log("Final salary",total)

}