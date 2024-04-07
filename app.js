const value = 63;
const age = 34;
if (age >= value) {
 console.log("You can retire");
} else  {
  console.log("Can not retire");
}

//Second Question
//const num = 4;
//if (num % 2 == 0) {
//  console.log("The number is even.");
//} else {
//console.log("The number is odd.");
//}

//3rd question
const month = "February"
//! Version 1
const winterMonths = ["December", "January", "February"];
const springMonths = ["March", "April", "May"];
const summerMonths = ["June", "July", "August"];

if (winterMonths?.includes(month)) {
  console.log("It is winter");
} else if (springMonths?.includes(month)) {
  console.log("It is spring");
} else if (summerMonths?.includes(month)) {
  console.log("It is summer");
} else {
  console.log("It is autumn");
}

if (month === "December" || month === "January" || month === "February") {
  console.log("It is winter");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("It is spring");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("It is summer");
} else if (
  month === "September" ||
  month === "October" ||
  month === "November"
) {
  console.log("It is autumn");
} else {
  console.log("Invalid month");
}

//4th question
//const value = 14;
//const num1 = 3;
//const num2 = 5;
//if (value % num1 == 0 && value % num2 == 0) {
// console.log("yes");
//} else {
//console.log("No");
//}

//5th question
//const value = 95;
//const num = 2;
//if (value % num == 0) {
//console.log("Divided");
//} else {
//console.log(value % num);}

1

//6th question
//const num1 = 3;
//const num2 = -5;
//if (num1 * num2 > 0) {
//console.log("The number is positive");
//} else {
//console.log("The number is negative");}

//7th question
//const num = 405;
//if (num > 1 && num < 100) {
//console.log("It is correct");}
//else{
//console.log("Incorrect");}

//8th question
//const num1 = 234;
//const num2 = 657;
//const num3 = 129;

//if (num1 >= num2 && num1 >= num3) {
//largest = num1;
//} else if (num2 >= num1 && num2 >= num3) {
//largest = num2;
//} else {
//largest = num3;}

//console.log("The largest number is " + largest);

//9th question
//const num1 = 55;

//if (num1 >= 90) {
//console.log("A");
//}
//else if (num1 >= 80 && num < 90) {
//console.log("B");
//}
//else if (num1 >= 70 && num1 < 80) {
//console.log("C");
//}
//else if (num1 >= 60 && num1 < 70) {
//console.log("D");
//}
//else if (num1 < 60) {
//console.log("F");
//}else{
console.log("invalid number")
}

//11th question
const age = 44;
if (age <= 18) {
console.log("Teenager");
} else if (age > 18 && age < 64) {
console.log("Adult");
}else if (age > 64) {
console.log("Old");
}else {
 console.log("invalid age")
}

//12th question
//const x = 1;
//const y = 0;
//if (x > 0 && y < 0) {
//console.log(4 * x + 2 * y + 4);
//}
//if (x > 0 && y == 0) {
//console.log(2 * x - y + 3);
//}
//if (x < 0 && y > 0) {
// console.log(3 * x + 4 * y + 3);}

//13th question
const num = 53;
