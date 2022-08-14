
// arr.reduce((sum, ele)=>{

// })
const arr = [[3, 2], [1], [4, 12]];
let sum = 0;
//using flat() and reduce()
let sumOfArray = arr.flat(1).reduce((sum, ele)=>{
    debugger;
    return sum+ele;
})

// console.log(arr.flat(1));
//or using reduce() method only as it is 2D array
let flattedArray = arr.reduce((accumulator, ele)=>{
    return accumulator.concat(ele);
})
console.log(flattedArray);

let arraySum = arr.reduce((accumulator, ele)=>{
    return accumulator.concat(ele);
}).reduce((sum, ele)=>{
    return sum+ele;
});

console.log(arraySum);