"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let total=0
   
 for(let i=0;i<lunch.length;i++){
    total +=lunch[i].price

}
console.log("Subtotal is " + total)
let tip=.18*total
let tax=.08*total
console.log("Tax is " + tax)
console.log("Tip is " + tip)
console.log("Total is " + (total + tax + tip))