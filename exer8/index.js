//Create a module with the following object:

//{
  //  "array": [
    //one,
    //two,
    //3
    
    //],
    //"boolean": true,
    //"number": 123,
    //"object": {
    //"a": "b",
    //"c": "d",
    //"e": "f"
    //},
    //"string": "Hello World"
    //}
    //It imports the module and displays the value of the “boolean” property and the “c” attribute of the “object” on the console.


    const obj = require("./obj");

    console.log (obj.boolean);
    console.log (obj.object.c);
