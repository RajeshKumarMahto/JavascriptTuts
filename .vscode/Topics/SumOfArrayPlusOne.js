"use strict"

function sumOfArrayPlusOne(arr1) {
    //Using Map() and reduce()
    // const newArr= arr1.map((ele)=>{
    //     return ele+1;
    // })
    // console.log(newArr);
    // let finalSum = newArr.reduce((total, ele)=> total+ele);
    
    // Chained
    let finalSum = arr1.map((ele)=> ele+1 ).reduce((total, ele)=> total+ele);

    return finalSum;
}
const arr = [1, 3, 5, 6];
console.log(sumOfArrayPlusOne(arr));