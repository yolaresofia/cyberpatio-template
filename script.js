/// Objects

let ourPets = {
  kitty: "Abya",
  dog: "Negrita",
};

// console.log(ourPets);

// accessing object properties

// console.log(ourPets.kitty);
// console.log(ourPets["kitty"]);

// adding properties to object

// delete ourPets.kitty;
// console.log(ourPets);

// ourPets.orangeCat = "Mimi";
// console.log(ourPets);

// bracket notation

// ourPets["orangeCat"] = "MIMI";
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

// console.log(Object.values(ourPets));

// for in loop

// for (let pet in ourPets) {
//   console.log(pet);
// }

// object.values()
// Object.values(ourPets);

///// functions

// // Function Declaration

// function sayHelloWorld() {
//     const whatToSay = 'Hello, World!';
//     console.log(whatToSay);
//   }

// sayHelloWorld();

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

// function add(a, b) {
//   console.log(a + b);
// }

// add(2, 4);
// add(10, 24);
// add(11, 53);

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

//   sayHelloManyTimes('cyberBrain', 6);
//   // Will this work?

// calback function

// function eatDinner() {
//   console.log("Eating the dinner ");
// }

// function eatDessert() {
//   console.log("Eating the dessert ");
// }

// eatDinner();
// // <== Eating the dinner

// eatDessert();
// // <== Eating the dessert

// function eatDinner(){
//     setTimeout(function(){
//       console.log("Eating the dinner ");
//     }, 3000)
//   }

//   function eatDessert(){
//     console.log("Eating the dessert ");
//   }

//   eatDinner(); // calling this function and this waits 3 secoonds after executing its body
//   eatDessert();

//   // the console:
//   // Eating the dessert
//   // Eating the dinner

// function eatDinner(something){
//     console.log("Eating the dinner ");
//   }

//   function eatDessert(something){
//     console.log("Eating the dessert ");
//     something();
//   }

//   eatDinner(eatDessert);
//   eatDessert(eatDinner)
// <== notice that there's NO () when passing a function as argument here
// Eating the dinner
// Eating the dessert

// function calculateTotalPrice(price, taxPercent){
//     if(typeof price !== 'number' || typeof taxPercent !== 'number'){
//       return `You have to pass number values!`;
//     }
//     const theTaxPart = price * taxPercent / 100
//     return `${price + theTaxPart} €`;
//   }

//   console.log(calculateTotalPrice('hola', 5))// <== 5.35 €

// function anotherFunction(text){
//     console.log(`Hello ${text}!`);
//   }

//   function oneFunction(name) {
//      `the result of anotherFunction is: ${anotherFunction(name)}` ;
//   }

// console.log();// Prints "Hello Lluis"
// oneFunction("Lluis")

// random example

// const zeroToOne = Math.random();// Random integer number [0,1]

// // console.log(zeroToOne)
// // // Returns a random number between min (inclusive) and max (exclusive)

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log(getRandomArbitrary(1,10));
// console.log(getRandomArbitrary(2,20));
// console.log(getRandomArbitrary(8,65));

// function gradeTheStudent() {
//   const grades = ["Master", "Good", "Acceptable", "Average", "Poor", "Fail"];

//   let randomNumber = Math.random();
//    randomNumber = randomNumber * grades.length; // Random decimal [0.0 - 6.0)
//    randomNumber = Math.floor(randomNumber); // Random integer [0   - 5]

//   return grades[randomNumber];
// }

// console.log( gradeTheStudent());
// gradeTheStudent; // returns a random grade
// const myGrade = gradeTheStudent();
// const myOtherGrade = gradeTheStudent();
// console.log(myGrade);

// anon function

//   setTimeout(function(){
// console.log("🚀 ~ file: script.js ~ line 246 ~ gradeTheStudent ~ randomNumber", randomNumber)
// console.log("🚀 ~ file: script.js ~ line 246 ~ gradeTheStudent ~ randomNumber", randomNumber)
//     console.log("This is just an example of anonymous function since this function really doesn't have a name.")
// }, 1000);

// function someFunctionName(){
//     console.log("This is just an example of anonymous function since this function really doesn't have a name.")
// }
// setTimeout(someFunctionName, 1000);

// const newQuizz = Math.floor(Math.random()*101) + " + " + Math.floor(Math.random()*101);
// console.log(newQuizz);//We should get `a randomNumber` + `a randomNumber`

// //with a function, we can even set different limit each time we call the function
// function getRandomNumber(limit) {
//   return Math.floor(Math.random() * (limit + 1));
// }

// function makeAQuizz(limit) {
//   const generateQuizz = getRandomNumber(limit) + " + " + getRandomNumber(limit);
//   console.log(generateQuizz)
// }

//  makeAQuizz(100);
//  makeAQuizz(200);
//  makeAQuizz(300); // Now we can create as many quizzes as we want, and change the limit as many times as we want!

// function sayHello() {
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

// //modifies the global variable
// let firstName = "Ana"; // <== global variable
// function sayHello() {
//   firstName = "Martina";
//   console.log(`Hello ${firstName}!`);
// }
// console.log(`Before the function executes the first name is ${firstName}.`);
// // <== Before the function executes the first name is Ana.
// sayHello(); // <== Hello Martina!
// console.log(`After the function executes the first name is ${firstName}.`);
// // <== After the function executes the first name is Martina.

// // function declaration:
// greeting('Milton');

// function greeting(name) {
//     console.log(`Hello, ${name}`);
// }

// // function expression:
// let greeting = function(name) {
//     console.log(`Hello, ${name}`);
//   }

// // function expression & function declaration exception

// let firstName = prompt("What is your name?");

// if (firstName){
//   function greeting(firstName) {
//     console.log(`Hello, ${firstName}`);
// 	}
// 	greeting(firstName); // <== Hello firstNameYouEntered
// }

// greeting(firstName); // <== ReferenceError: greeting is not defined

// function greeting(firstName) {
//   console.log(`Hello, ${firstName}`);
// }
// greeting("sofie"); // <== ReferenceError: greeting is not defined

// //   // arrow function:
// const greeting = () => console.log(`Hello, sofie`);
// greeting("sofie"); // <== ReferenceError: greeting is not defined

// // HIGH ORDER FUNCTIONS

// const add = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// const add2 = add(2);
// add2(3); // => 5

// forEach
 
// const numbers = ["one", "two", "three", "four", "five"];
// //  numbers.forEach((number) => console.log('the number is: ', number) )
// const newArray = numbers.map((number) =>  `the number is: ${number}`)
// console.log(newArray)

// map

// const names = ["ana", "martina", "lucy", "john", "lee"];
// const capitalized = names.map(function (name) {
//   return name[0].toUpperCase() + name.slice(1);
// });

// console.log(capitalized);

//filter

const words = ["hello", "cyberPatio", "yes", "frontEnd", "JS", "functions!", "now"];
const threeLetterWords = words.filter( (word) => word.length < 3);
console.log(threeLetterWords);
