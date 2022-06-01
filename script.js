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

///// functions

// // Function Declaration
// function sayHelloWorld() {
//     const whatToSay = 'Hello, World!';
//     console.log(whatToSay);
//   }

// function sayHelloMery() {
//   console.log('Hello, Mery!');
// }

// function sayHelloJohn() {
//   console.log('Hello, John!');
// }

// function sayHelloLucy() {
//   console.log('Hello, Lucy!');
// }

// sayHelloMery();
// // function will print: "Hello Mery!"
// sayHelloJohn();
// // function will print: "Hello John!"
// sayHelloLucy();
// // function will print: "Hello Lucy!"

// function sayHello(name) {
//     console.log(`Hello ${name}!`);
//   }

//   sayHello('Mery');
//   // name = Mery
//   // function will alert: "Hello Mery!"

//   sayHello('John');
//   // name = John
//   // function will alert: "Hello John!"

//   sayHello('Lucy');
//   // name = Lucy
//   // function will alert: "Hello Lucy!"

// function sayHello(name) {
//     console.log(`Hello ${name}!`);
//   }

//   sayHello('Mery');
//   // name = Mery
//   // function will alert: "Hello Mery!"

//   sayHello('John');
//   // name = John
//   // function will alert: "Hello John!"

//   sayHello('Lucy');
//   // name = Lucy
//   // function will alert: "Hello Lucy!"

// function sayHelloManyTimes(name, howManyTimes) {
//     for (let i=0; i < howManyTimes; i++) {
//       console.log(`Hello ${name}!`);
//     }
//   }

//   sayHelloManyTimes('Michael', 2);
//   // => Hello Michael!
//   // => Hello Michael!

//   sayHelloManyTimes(3, 'ERROR');
//   // Will this work?

//   sayHelloManyTimes(2);
//   // Will this work?

//   sayHelloManyTimes('cyberBrain');
//   // Will this work?

// calback function

// function eatDinner(){
//     console.log("Eating the dinner ");
//   }

//   function eatDessert(){
//     console.log("Eating the dessert ");
//   }

//   eatDinner();
//   // <== Eating the dinner

//   eatDessert();
//   // <== Eating the dessert

//
// function eatDinner(){
//     setTimeout(function(){
//       console.log("Eating the dinner ");
//     }, 1000)
//   }

//   function eatDessert(){
//     console.log("Eating the dessert ");
//   }

//   eatDinner();
//   eatDessert();

//   // the console:
//   // Eating the dessert
//   // Eating the dinner

// function eatDinner(callback){
//     console.log("Eating the dinner ");
//     callback();
//   }

//   function eatDessert(){
//     console.log("Eating the dessert ");
//   }

//   eatDinner(eatDessert);
//   // <== notice that there's NO () when passing a function as argument here
//   // Eating the dinner
//   // Eating the dessert

// random example

// const zeroToOne = Math.random();// Random integer number [0,1]

// // Returns a random number between min (inclusive) and max (exclusive)

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// gradeTheStudent; // returns a random grade

// function gradeTheStudent () {
//     const grades = ['Master', 'Good', 'Acceptable', 'Average', 'Poor', 'Fail'];

//     let randomNumber = Math.random();// Random decimal [0.0 - 1.0)
//     randomNumber = randomNumber * grades.length;// Random decimal [0.0 - 6.0)
//       randomNumber = Math.floor(randomNumber);// Random integer [0   - 5]

//     return grades[randomNumber];
//   }

//   const myGrade = gradeTheStudent();
//   console.log(myGrade);

// anon function

//   setTimeout(function(){
//     console.log("This is just an example of anonymous function since this function really doesn't have a name.")
// }, 1000);

// function someFunctionName(){
//     console.log("This is just an example of anonymous function since this function really doesn't have a name.")
// }
// setTimeout(someFunctionName, 1000);

// function SayHello() {
//   let firstName = "Ana"; // <== local variable
//   console.log(`Hello ${firstName}!`);
// }
// sayHello(); // <== Hello Ana!
// console.log(firstName); // <== ReferenceError: firstName is not defined

// Global scope

// const firstName = "Ana"; // <== global variable
// function sayHello() {
//   console.log(`Hello ${firstName}!`);
// }
// sayHello(); // <== Hello Ana!
// console.log(firstName); // <== Ana

// modifies the global variable
// let firstName = "Ana";// <== global variable
// function sayHello() {
//   firstName = "Martina";  console.log(`Hello ${firstName}!`);}
// console.log(`Before the function executes the first name is ${firstName}.`);
// // <== Before the function executes the first name is Ana.
// sayHello();// <== Hello Martina!
// console.log(`After the function executes the first name is ${firstName}.`);
// // <== After the function executes the first name is Martina.

// // function expression:
// let greeting = function(name) {
//     console.log(`Hello, ${name}`);
//   }
//   // arrow function:
//   let greeting = name => { console.log(`Hello, ${name}`);}

// HIGH ORDER FUNCTIONS

// const add = function (a) {
//     return function (b) {
//       return a + b;  }
//   ;};
//   const add2 = add(2);
//   add2(3);// => 5

// forEach

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//   console.log(number);
// });

// map

// const names = ["Ana", "Martina", "Lucy", "John", "Lee"];
// const capitalized = names.map(function (name) {
//   return name[0].toUpperCase() + name.slice(1);
// });
// console.log(capitalized);

// filter

// const words = ["hello", "cyberPatio", "yes", "frontEnd", "JS", "functions!", "now"];
// const threeLetterWords = words.filter(function (word) {
//   return word.length === 3;
// });
// console.log(threeLetterWords);
