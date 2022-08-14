// const myData={
//     name: 'Rajesh',
//     branch: 'EE',
//     age: 26
// }

// var myAge = myData.age;
// console.log(myAge);
// var myName = myData.name;
// console.log(myName);

//Dynamic Property
let myName = 'Raj';
const myBiodata={
    [myName] : "Hi, How are you?",
    [20+6]: "is your age"
}

console.log(myBiodata);