// Write a module with a function that receives an array of numbers and displays it on the screen from the first position to the last. Then write another module with a function that receives an array of numbers and displays it on the screen from the last position to the first. Create an array and pass it to each of the functions.
const showArray = require("./showArray")
const showInverseArray = require("./showInverseArray")

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
showArray(array);
showInverseArray(array);