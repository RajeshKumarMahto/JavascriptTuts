const names = ['Rajesh', 'vishal', 'Rupesh', "Rajveer"];

// console.log(names);

//1. Adding in array
//At last using push() => // returns new array length 

// var y = names.push('Vikram');
// console.log(names); //=>[ 'Rajesh', 'vishal', 'Rupesh', 'Rajveer', 'Vikram' ]
// console.log(y);//

// //at begining using unshift() => returns new array length 

var x = names.unshift('Nisha');
console.log(names);//[ 'Nisha', 'Rajesh', 'vishal', 'Rupesh', 'Rajveer', 'Vikram' ]
console.log(x);

//2. Removing from Array

//From last using pop() => returns removed element
// var a = names.pop();
// console.log(names);
// console.log(a);

//removing from first using shift() => returns the removed element
// var b= names.shift();
// console.log(names);
// console.log(b);


//3. Traversing in Array
//Using indexing:
const city = ['Kolkata', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Chennai'];

// console.log(city[0]);
// console.log(city[5]);
// //using traditional for loop
// for(let i = 0; i < city.length; i++){
//     console.log(city[i]);
// }
//using for in loop  => Gives the index values of an array or keys of and Object
// for (const key in city) {
//    console.log(key);
// }

const bioData={
    myName: 'Rajesh',
    age: 26,
    city: 'Dhanbad',
    state: 'Jharkhand',
    pin: 828401
}

//get the value of each key in Object
// for(let key in bioData){
//     console.log(`Key: ${key}, value: ${bioData[key]}`);
// }

//using for of loop => Gives elements from any iterable object i.e. array, maps, nodeList, string etc
// for(let element of city){
//     console.log(element);
// }

let websiteName = 'w3resources.com';
// for(let x of websiteName){
//     console.log(x);
// }

// Array.forEach() loop: It's a combination of for of and for in loop basically
// city.forEach((element, index) => {
//     console.log(`element: ${element} at index: ${index}`);
// });

// city.forEach(function (element, index, city) {
    
//     console.log(city);
// });

//Array.map()
const numbers = [23, 4, 56, 6, 56, 8, 10];
//print even numbers

// numbers.forEach((element)=>{
//     if(element%2 == 0){
//         console.log(element);
//     }
// });

// const num1 = numbers.map(element =>{
//         return element*2;
// });
// console.log(num1);

// const num2 = numbers.reduce((total, value) =>{
//     return total+value;
// });
// console.log(num2);

// console.log(numbers.indexOf(24));
// console.log(city.indexOf("Mumbai"));
const number = [22, 4, 56, 6, 56, 8, 10];
let check = number.every((value)=>{
    return value%2==0;
})
console.log(check);
let greateThan50 = numbers.find((element)=>{
    return element>50;
});
console.log(greateThan50);
