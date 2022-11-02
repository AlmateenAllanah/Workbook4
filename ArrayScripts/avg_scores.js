"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(array){
    let add=0
    
    for(let count=0;count<array.length;count++){
   add= add+array[count];

    }
    let average = add/array.length;
    return average
}
console.log(getAverage(yourScores))
console.log(getAverage(myScores))