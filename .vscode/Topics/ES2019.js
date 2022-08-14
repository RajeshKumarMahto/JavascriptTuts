//1. Array.prototype.{flat, flatMap}
//2. Object.fromEntries

const arr = ['A', 'B', 'C', 'D', 'E'];
const iterator1 =  arr.entries();//So basical returns an array  iterator  that  contains K,V pair for each index 
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// Array.prototype.flat=> removes the nested array to make only one array
const arr1 = [2, 4, 6, [5, 7, 8, [9,13]]]
console.log(arr1.flat());//[ 2, 4, 6, 5, 7, 8, [ 9.13 ] ] ==> removes first nested[] and return new [] without changinf original array
//...so default parameter 1 hota hai
console.log(arr1);//[ 2, 4, 6, [ 5, 7, 8, [ 9.13 ] ] ] ==> abhi bhi same hai as defined
console.log(arr1.flat(2));//flattened all array==>[2, 4, 6,  5, 7, 8, 9, 13]
console.log(arr1.flat(3));//agar depth number of nested array se bda hai to jitna nested hai usko bs flat krega

// Array.prototype.flatMap=> removes the nested array to make only one array
