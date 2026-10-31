// ! if-else
// let age =18;
// if (age>= 18){
//     console.log("eligble for vote")
// }else{
//     console.log("not eligble for vote")
// }

// ! if-else if
// ? wjp program to chacke the number is positve or negetive or zero

// const prompt = require("prompt-sync")({sigint:true})
// let n = Number(prompt("enter the n : "))
// if(typeof(n)=== 'string'){
//     // (typeof n === 'string')
//     console.log("This is note a number")
// }
// else if (n>0){
//     console.log("positive")
// }else if(n<0){
//     console.log("negetive")
// }
// else{
//     console.log("zero")
// }

// download prompt package
// npm install prompt-sync

const prompt = require("prompt-sync")({sigint:true})
// let n = Number(prompt("enter the n : "))
// let n = parseInt(prompt("enter the n : "))
// let n = parseFloat(prompt("enter the n : "))
let n = +(prompt("enter the n : "))
    console.log(n,typeof(n))


    // ? assignment
    // wjp to chcke weather the number is even or odd
    // wjp to check weather a number is divisible by 5 and 10
    // wjp to find the greatest amonug three number
    // wjp to weather the number is positive even ,positive odd
    // wjp to calculate a shopping discount on parchsing amount
    // wjp to chacke weathe rthe given number is single digit 2 digit or 3 digit