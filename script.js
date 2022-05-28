// simple if statement

// const age = parseInt(prompt("Welcome to cyberpatio cinema. How old are you?"));

// if (age <= 16) {
//   console.log ("You have a teenager discount.");
// }
//  else if (age >= 65) {
//   console.log ("You have a senior citizen discount :)");
// } else {
//   console.log ("Sorry, you don't have any discount :(");
// }

// complex if statement

// const number1 = parseInt (prompt ("First number:"));
// const number2 = parseInt (prompt ("Second number:"));
// if (number1 === number2) {
//   console.log ("The numbers are equal.");
// } else {
//   if (number1 > number2) {
//     console.log("Number 1 is bigger than number 2.");
// } else {
//     console.log("Number 1 is smaller than number 2.");
//   }
// }

// hello world

// const lang = prompt("what's your language?");

// if (lang === "es") {
//   console.log("Hola, mundo!");
// } else if (lang === "fr") {
//   console.log("Bonjour, tout le monde!");
// } else if (lang === "en") {
//   console.log("Hello, world!");
// }

//switch hello world

// const lang = prompt("what's your language?");

// switch (lang) {
//   case "es":
//     console.log("Hola, mundo!");
//     break;
//   case "fr":
//     console.log("Bonjour, tout le monde!");
//     break;
//   default:
//     console.log("Hello, world");
//     break;
// }

// while loop

// let i = 0; while (i <= 100) {
//     console.log (i);
//     i++; // this is the same as i = i + 1
//   }

// for loop

// const cyberpatio = "Cyberpatio";
// for (let index = 0; index < cyberpatio.length; index++) {
//   console.log(cyberpatio.charAt(index));
// }

////// Arrays

// const arrayNames = ["Pedro", "Jake", "Joan", "Mike"];
// console.log(arrayNames[0]); // <== Pedro

// loging items & undefined

// console.log(arrayNames[1]);// <== Jake
// console.log(arrayNames[2]);// <== Joan
// console.log(arrayNames[3]);// <== Mike
// console.log(arrayNames[99]);// <== undefined

// adding items to array

// const arrayNames = ["Pedro", "Jake", "Joan"];
// arrayNames.unshift("Rachel");
// console.log(arrayNames);// <== Rachel

// push

// const arrayNames = ["Pedro", "Jake", "Joan"];
// arrayNames.push("Mike");
// console.log(arrayNames); // <== Mike

// pop
// const arrayNames = ["Pedro", "Jake", "Joan", "Mike"];
// arrayNames.pop();
// console.log(arrayNames[3]); // <== Mike

// shift
// const arrayNames = ["Pedro", "Jake", "Joan", "Mike"];
// arrayNames.shift();
// console.log(arrayNames); // <== Jake

// removing items from array

// const arrayNames = ["Joan", "Ana", "Mark", "Pedro", "Jake"];
// // arrayNames.splice(0,2);
// // arrayNames.splice(1,1);
// // arrayNames.splice(2,1);

// console.log("splice:",arrayNames.splice(0, 2));
// console.log("arrayName after splice:",arrayNames);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus =  fruits.slice(1, 3);
// console.log("fruits:",fruits, "citrus:", citrus)

// iterating over arrays

// const arrayNames = ["Pedro", "Jake", "Joan"];
// for (let i = 0; i < arrayNames.length; i++) {
//   console.log(`The name is ${arrayNames[i]}`);
// }

// let myArray = ["one", "two", "three", "four","five"];

// console.log("static method");
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

//  console.log("for loop");
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// string split

// const stringNames = "Pedro, Jake, Joan";
// const arrayNames = stringNames.split("");
// console.log(arrayNames);

/// Objects

// let ourPets = {
//   kitty: "Abya",
//   dog: "Negrita",
// };

// console.log(ourPets);

// accessing object properties

// console.log(ourPets.kitty);
// console.log(ourPets["kitty"]);

// adding properties to object

// ourPets.orangeCat = "Xixo";
// console.log(ourPets);

// bracket notation

// ourPets["orangeCat"] = "Xixo";
// console.log(ourPets);

// updating properties

// ourPets.kitty = "Abya Yala";
// // or
// ourPets["kitty"] = "Abya Yala";

// deleting properties

// delete ourPets.kitty;
// // or
// delete ourPets["kitty"];

// object.keys()

// Object.keys(ourPets);

// for in loop

// for (let key in ourPets) {
//   console.log(key);
// }

// object.values()
// Object.values(ourPets);
