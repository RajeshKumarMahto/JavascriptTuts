//Array destructuring means accession the elements from array or properties from
// objects index values and assigining it to variable
var fullName = ['Rajesh', 'Kumar', 'Mahto'];

// var firstName = fullName[0];
// var middleName = fullName[1];
// var lastName = fullName[2];

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// let [fName, mName, lName]= fullName;
// console.log(fName);
//adding variables while destructuring but not assigning ==> 
//Gives value of that field 'undefined'
// let [fName, mName, lName, address]= fullName;
// console.log(address);
//adding variables while destructuring and assigning ==> 
//Gives value of that field 'undefined'
let [fName, mName, lName, address='Santhaldih']= fullName;
console.log(address);
console.log(fullName); //Gives only the initial values but not address field. Means it doesnot add to original array



