
// we need to use  const add to save the properties return by the require function and so as we use const so this cannot be reassigned
const operator = require("./operator");
//object declared for using the functionalities of the operator file 
console.log(operator);


//another way to directly acces the functions of a particular module is passing its functions as objects whle declaration like
const {add,sub,name,mult} = require('./operator');
//function being called in another file along with arguements
console.log(add(50,5));
console.log(sub(10,5));
console.log(mult(10,5));

console.log(name);