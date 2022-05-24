// Install the exact-math package using npm. Create a .js file and display the following operations on the console using the installed module: a. 789+34+250443, b. 2059-79, c. 3.24*97.856, d. 1205/12.002
const exactMath = require ('exact-math');
console.log(exactMath.add(789, 34, 250443));
console.log(exactMath.sub(2059,79)); 
console.log(exactMath.mul(3.24, 97.856)); 
console.log(exactMath.div(1205, 12.002)); 
