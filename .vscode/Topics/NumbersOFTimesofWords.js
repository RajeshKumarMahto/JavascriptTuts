const pets = ['dog', 'cat', 'cow', 'rabbit', 'dog', 'mouse', 'cow'];
console.log(pets['dog']=1);
var perCounts = pets.reduce((object, element)=>{

    if(!object[element]){
        object[element]=1;
    }
    else{
        object[element]++;
    }
    return object;
}, {})

console.log(perCounts);