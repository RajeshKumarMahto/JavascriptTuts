"use strict"

function reverseEachWordsInString(str) {
    let stringArray = str.split(" ");
    let reversedString = stringArray.map((ele)=> ele.split("").reverse().join(""));
    return reversedString.join(" ").toString();
    // let strArr= str.split(" ");
    // let reversedString = [];
    // strArr.forEach(element => {
    //     let reversedWord = element.split('').reverse().join("");
    //     // console.log(reversedWord);
    //     reversedString.push(reversedWord);
    // });

    // return reversedString.join(" ").toString();
}

console.log(reverseEachWordsInString("Rajesh Kumar Mahto"));
