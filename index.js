//random number 
//love calculator
var name1=prompt("Enter name of person 1: ");
var name2=prompt("Enter name of person 2: "); 
var n = Math.random() * 100; 
n = Math.floor(n) + 1;

alert(name1 + " and " + name2 + " are " + n +"% match.");

//control statements
function bmiCalculator(weight,height){
    var bmi = weight / Math.pow(height,2);
    var interpretation;

if(bmi < 18.5){
    interpretation = "Your BMI is "+ bmi + ", so you are underweight.";
}

if(bmi >= 18.5 && bmi < 24.9){
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
}

if(bmi >= 24.9){
    interpretation = "Your BMI is "+ bmi + ", so you are overweight.";
}

return interpretation;
return calcRoundUp(bmi);

}

function calcRoundUp(bmi){
    var rounded = Math.round(bmi);
    return rounded;
}

//leap year calculator
function isLeap(year){
var by4 = year % 4;
var by100 = year % 100;
var by400 = year % 400;
var decision;

if (by4 === 0 && by100 !== 0 ){
   decision = "Leap year.";
} 
if (by100 !== 0 && by400 === 0){
    decision ="Leap year.";
}
if (by4 === 0 && by100 !== 0){
    decision ="Leap year."
}
else{
    decision ="Not leap year.";
}
return decision;
}

//other solution
//leap year calculator
function isLeap(year){
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            return "Leap year.";
        }
    }
  else{
        return "Not a leap year.";
    }
} 
  else{
    return "Not a leap year.";
}
}

//arrays
var guestList = ["Lyka", "Ori", "Chumi", "Rooney", "Chumchum"];

var guest = prompt("Hello! What is your name?");

if (guestList.includes(guest) === true){
    alert("Welcome our beloved guest!");
}else{
    alert("Sorry, maybe next time.");
}

//counter
var output = [];
var count = 1;

function generateCount(){
    output.push(count);
    count++;

    console.log(output);
}


//Fizz Buzz
var output = [];
var count = 1; 


function FizzBuzz(){

if (count % 3 === 0 && count % 5 === 0){
     output.push("FizzBuzz");
}

else if (count % 3 === 0){
    output.push("Fizz");
}
else if (count % 5 === 0){
   output.push("Buzz");
}

 else{
   output.push(count); 
}

count++;
console.log(output);
}
