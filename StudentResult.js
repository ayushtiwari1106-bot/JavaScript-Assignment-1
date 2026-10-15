// 14. Student Result 
// Take marks of three subjects. 
// A student passes only when they score 
// 40 or more in every subject . 
// If the student passes, calculate the average and display: 
// Average >= 75 → Distinction 
// Average >= 60 → First Division 
// Average >= 50 → Second Division 
// Otherwise → Pass 
// If any subject is below 40: 
// Result: Fail

let hindi = 44;
let english = 87;
let maths = 81;

total = hindi+english+maths;
avg = total/3;

console.log("Average =",avg)

if(hindi >=40 && english >=40 && maths >=40 ){
    if(avg >= 75){
        console.log("Distinction")
    }
    else if(avg >= 60){
        console.log("First Division")
    }
    else if(avg >= 50){
        console.log("Second Division")
    }
    else{
        console.log("Pass")
    }

}
else{
    console.log("Fail")
}