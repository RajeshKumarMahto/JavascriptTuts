const arr = [1, 2, 3, 4, 5];
let oddBallSum = arr.reduce((sum, element)=>{
        if(element%2 === 1){
            return sum += element;
        }
        return sum;
},0);

console.log(oddBallSum);