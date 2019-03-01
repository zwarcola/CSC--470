/*
File Name: Project1
Student Name: Zach Warcola
Description: First project in CSC-470 to simulate the Monty Hall problem
*/

var nstay = 0; //define inital values to be 0
var nswitch = 0;

let simulate = function(){
  for(let i = 0; i < 100000; i++){ //loop to run play 100000 times
    let play = function(){

      let arr = ["goat", "goat", "goat"]; //initialize to all goats
      arr[Math.floor(Math.random() * 3)] = "car"; //randomly assign car to a door
      let curr = Math.floor(Math.random() * 3); //randomly pick a door to represent user selected door
      let openDoor = Math.floor(Math.random() * 3); //opened door

      while(arr[openDoor] === "car" || openDoor === curr){ //openDoor is guarenteed to be a goat and not our selected door
        openDoor = Math.floor(Math.random() * 3);
      }

      let arr2 = arr;

      for(let i = 0; i < arr2.length-1; i++){ //remove openDoor from array
         if (arr2[i] === openDoor) {
           arr2.splice(i, 1);
         }
      }

      if(arr2[curr] === "goat"){ //determine if switching would provide a win
        nswitch++;
      }
      else{
        nstay++;
      }
    }
    play(); //run play
  }
  console.log("Staying would give a win rate of: " + (nstay/100000)); //print out final values
  console.log("Switching would give a win rate of: " + (nswitch/100000));
}

simulate(); //execute testing
