let fname;
fname = "hisoka";
let lname;
lname = "Morrow"
let age;
age = 12;

let student =true;

console.log("Hello!",fname,lname);
console.log("You are ",age, "Years Old");
console.log("are you a students?",student)

document.getElementById("name").innerHTML = "Hello! " + fname +" " +lname;
document.getElementById("age").innerHTML = "You Are " + age +" Years old";
document.getElementById("student").innerHTML = "Are You a Student? "+ student;