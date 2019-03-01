/*
File Name: Lab1
Student Name: Zach Warcola
Description: Assignment to familiarize student with JS and chrome IDE.
             The student was tasked with preforming 3 calculations that
             work with stirngs, arrays, and JS methods.
*/


//Calculation 1: calculate sqrt of two values squared
let a = prompt("Enter a value for a: ");
let b = prompt("Enter a value for b: ");
let c = 0;

c = Math.sqrt(a*a + b*b); //do calculation and assign to c
alert("The value of C is " + c);

//Calculation 2:
let myString = prompt("Enter a comma-delimited string of values ");
myString.toString();
var arr = myString.split(","); //split array at commas
let newString = ""; //create a new blank string and add pieces of array with semi-colons
var i;
for(i = 0; i < arr.length; i++){
  if(i === arr.length - 1){ //if statement ensures we don't add an extra semi-colon at the end of the new string
    newString = newString + arr[i];
  }
  else{
    arr[i] = arr[i] + ";";
    newString = newString + arr[i];
  }
}
alert(newString);

//Calculation 3:
var d = new Date(prompt("Enter a date MM/DD/YYYY")); //create new date object with use input and alert
alert("Milliseconds conversion: " + Date.parse(d));
var newDate = d.toDateString(); //convert new date obect and alert
alert("New Date object: " + newDate);
