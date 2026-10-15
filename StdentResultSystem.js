// 30 student result system

let studentName = "Deepak";
let rollNumber = 34;
let mathsMarks = 87;
let hindiMarks = 90;
let englishMarks = 67;

totalmarks = mathsMarks+hindiMarks+englishMarks;
percentage = totalmarks/300*100;

if(mathsMarks>=40 && hindiMarks>=40 && englishMarks>=40){
    if(percentage>=90 && percentage<=100){
        garde = "A"
    }
    else if(percentage>=80 && percentage<=89){
        garde = "B"
    }
    else if(percentage>=70 && percentage<=79){
        garde = "C"
    }
    else if(percentage>=60 && percentage<=69){
        garde = "D"
    }
    else if(percentage>=40 && percentage<=59){
        garde = "E"
    }
    else{
        garde = "F"
    }
    result = "pass";
}
else {
    result = "Fail"
}

console.log("----------------------------------------")
console.log("             STUDENT RESULT             ")
console.log("----------------------------------------")
console.log("\n");

console.log("Name         : ",studentName);
console.log("Roll No      :",rollNumber);
console.log("\n");
console.log("Math         :",mathsMarks);
console.log("Hindi        :",hindiMarks);
console.log("English      :",englishMarks);
console.log("\n");
console.log("Total        :",totalmarks);
console.log("Percentage   :",percentage);
console.log("Grade        :",garde);
console.log("Result       :",result);
console.log("\n");
console.log("----------------------------------------");



