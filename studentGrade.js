// 13. Student Grade 
// Take a student’s percentage. 
// Assign a grade: 

let percentage = "56";

if (percentage >= 90 && percentage <= 100) {
    console.log("Grade A");

}
else if (percentage > 100 || percentage <= 0) {
    console.log("invailid");
}
else if (percentage >= 80 && percentage <= 89) {
    console.log("Grade B");
}
else if (percentage >= 70 && percentage <= 79) {
    console.log("Grade C");
}
else if (percentage >= 60 && percentage <= 69) {
    console.log("Grade D");
}
else if (percentage >= 40 && percentage <= 59) {
    console.log("Grade E");
}
else if (percentage < 40) {
    console.log("Fail");
}
else {
    console.log("please enter a vailid and real student percentage");
}






