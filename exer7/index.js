//Write your own module with a function that creates an array with 10 consecutive values. These values will be the 10 numbers following a number that it receives as a parameter. Write another module in which a random number is generated.
// It imports both and passes the random parameter to which it creates the array of 10 numbers and displays the result on the console.

const random = require("./random");
const array = require("./createArray");

console.log(array(random()));
