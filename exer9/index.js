// Create your own module with a function. The isEven() function returns "true" if the number is even and "false" otherwise. In the index.js file, generate a random number, call the isEven() function, and display the result of the function.

const isEven = require("./isEven");
const random = require("../exer7/random")

let randomNumber = random()

console.log(isEven(randomNumber) ? `The random number ${randomNumber} is even` : `The random number  ${randomNumber} is odd`)