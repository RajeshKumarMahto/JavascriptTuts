const arr = [2,5,3,7,9,3,6,10,23];
// console.log(arr.splice(1, 2));//permanently removes from original array
// console.log(arr);

// let lastEle = arr.splice(arr.length-1,1);
// OR
// let last= arr.splice(-1, 3);
// console.log(last);
// console.log(arr);

//Add element using splice
arr.splice(2, 0, 6)
console.log(arr)
