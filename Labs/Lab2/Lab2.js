/*
File Name: Lab2
Student Name: Zach Warcola
Description: Assignment to familiarize student with js functions
*/

let [setName, setBase, getGrade] = (function(){ //assign functions to calls
  var className = "No name added"; //set default values for each 3
  var baseline = 50;
  var letterGrade = "C (default)";

  let setClassName = function(name){ //define setClassName to take in name and assign to className
    className = name;
  }

  let setCurveBaseline = function(num){ //define setCurveBaseline to take in a num and assign to baseline
    if(num < 0 || num > 100){
      console.log("Invalid baseline input, using defaut baseline.");
    }
    else{
      baseline = num;
    }
  }

  let computeGrade = function(grade){ //define compute grade to take in a grade and use other functions to calculate
    let finalGrade = baseline + (1 - baseline/100.0)*grade; //math to get final grade

    if(grade < 0 || grade > 100){
      console.log("Invalid grade input, using default grade");
    }
    else if(finalGrade <= 59){ //series of statements to convert final grade to a letter
      letterGrade = "F";
    }
    else if(finalGrade <= 67){
      letterGrade = "D";
    }
    else if(finalGrade <= 70){
      letterGrade = "D+";
    }
    else if(finalGrade <= 73){
      letterGrade = "C-";
    }
    else if(finalGrade <= 77){
      letterGrade = "C";
    }
    else if(finalGrade <= 80){
      letterGrade = "C+";
    }
    else if(finalGrade <= 83){
      letterGrade = "B-";
    }
    else if(finalGrade <= 87){
      letterGrade = "B";
    }
    else if(finalGrade <= 90){
      letterGrade = "B+";
    }
    else if(finalGrade <= 93){
      letterGrade = "A-";
    }
    else if(finalGrade <= 100){
      letterGrade = "A";
    }
    else{
      letterGrade = "invalid grade input";
    }

    console.log("Classname: " + className); //print out final info
    console.log("Baseline: " + baseline + " Initial Grade: " + grade);
    console.log("Number Grade : "+ finalGrade + " Letter Grade: " + letterGrade);
    console.log(" ");
  }
  return [setClassName, setCurveBaseline, computeGrade]; //return array of values created by the master function
})();


//make class with invalid parameters
setBase(101);
getGrade(101);

//simple test case
setName("CSC-470");
setBase(65);
getGrade(75);

//make another classs
setName("ENG-352");
setBase(50);
getGrade(85);
