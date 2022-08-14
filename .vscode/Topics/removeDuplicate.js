const arr = [0, 4, 7, 2, 9, 3, 5, 4, 0, 6, 5, 1, 2];
// const duplicateRemoved = [];
// arr.filter((num)=>{
//     if(!duplicateRemoved.includes(num)){
//         duplicateRemoved.push(num);
//     }
// })

// console.log(duplicateRemoved);
//Using filter() and indexof()
// let duplicateRemoved = arr.filter((item, pos)=>{
//     return arr.indexOf(item) === pos;
// })

// console.log(duplicateRemoved);

//using forEach anf includes()
let uniqueElement = [];
arr.forEach((item)=>{
    if(!uniqueElement.includes(item)){
        uniqueElement.push(item);
    }
});

console.log(uniqueElement);
