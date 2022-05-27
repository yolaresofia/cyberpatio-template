// Numeric Operators

// console.log("1+1= ", 1 + 1);
// console.log("3-2= ", 3 - 2);
// console.log("6*2= ", 6 * 2);
// console.log("8/2= ", 8 / 2);

// // Advanced Operators
//test
// console.log("2**3: ", 2 ** 3);
// console.log("7%2: ", 7 % 2);

// // Assignment Operators

// let myAge = 32;
// myAge += 10;
// console.log(myAge);

// let firstName = "Ana";
// console.log("Hello there, "+ firstName );
// // ==> Hello there, Ana!
// console.log(`${firstName} walks every day at least ${1+2} km `);
// ==> Ana walks every day at least 3km

// String length

// const firstName = "444";
// console.log("firstName length is: ", firstName.length);// <== 3

// Accessing characters

// const greeting = "Hello there!";
// console.log(`"${greeting}" is a string and it's length is ${greeting.length}.`);
// // "Hello there!" is a string and it's length is 12.
// console.log(greeting.charAt(0)); // <== H
// console.log(greeting.charAt(1)); // <== e
// console.log(greeting.charAt(5)); // <== " "
// console.log(greeting.charAt(11)); // <== !
// console.log(greeting.charAt(12)); // <== "" as an empty string
// const greetingAna = greeting + ' ' + 'Ana';
// console.log(greetingAna[2]);

// Finding a substring

const message = "Don't be sad, be happy!";
console.log(message.indexOf("'t be sad, be"));// <== 0
// console.log(message.indexOf("t"));// <== 4
// console.log(message.indexOf("Be"));// <== -1 (capitalized Be ≠ lowercased be)
// console.log(message.indexOf("py"));// 20

// // OR Operator (||)

// true  || true// => true
// true  || false// => true
// false || true// => true
// false || false// => false
// false || (4 > 2)// true

// // AND Operator (&&)

// true  && true// => true
// true  && false// => false
// false && true// => false
// false && false// => false
// true  && (4 > 2)// => true

// // NOT Operator (!)

// !true// => false
// !false// => true!
// (4 > 2)// => false

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



// while loop

// let i = 0; while (i <= 100) {
//     console.log (i);
//     i++; // this is the same as i = i + 1
//   }

// for loop

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// const cyberpatio = "Cyberpatio";
// for (let index = 0; index < cyberpatio.length; index++) {
//   console.log(cyberpatio.charAt(index));
// }


