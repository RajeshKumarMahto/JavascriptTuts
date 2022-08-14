//1. String padding
//2. Object.value
//3. Object.entries

//1. String padding
// let message = 'Hi, how are you?';
// console.log(message.length);
// console.log(message);
// //padStart()
// console.log(message.padStart(5));//no change since 5 is less than total length of string
// console.log(message.padStart(18));//add 2 spaces at beginning of initial string as 18-16 is 2 
// console.log(message.padStart(20));//add 4 spaces at beginning of initial string as 20-16 is 4
// console.log(message.padStart(21, 'Raj'));//RajRHi, how are you? ==> difference = 5, but Raj is 3 characters so it repeats
// console.log(message.padStart(20, 'Rajesh'));//RajeHi, how are you?
// //padEnd()
// console.log(message.padEnd(15));//no change since 15 is less than total length of string 16
// console.log(message.padEnd(18));//add 2 spaces at end of initial string as 18-16 is 2
// console.log(message.padEnd(18, "****"));//add two ** at end of initial string as 18-16 is 2

//2. Object.values
const person = {Name:'Raj', Age:26};
console.log(Object.values(person)); //return the values of each fields
console.log(Object.entries(person));//returns each field-value pairs as Object. o/p: [ [ 'Name', 'Raj' ], [ 'Age', 26 ] ]
console.log(typeof(Object.entries(person)));//Object
console.log(typeof(person));//Object