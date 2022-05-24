// Write your own module with a function that receives two numbers as a parameter and displays the lower of the two on the console. Import it into an index.js file and display the result.

function minor(num1, num2) {
    console.log(num1 < num2 ? "the smallest is " + num1 : num1 > num2 ? "The smallest is " + num2 : "Both are the same")
}

module.exports = minor;