
    // ? assignment
    // wjp to chcke weather the number is even or odd

//     const prompt = require("prompt-sync")({ sigint: true });

// let n = +(prompt("Enter a number: "));

// if (n % 2 === 0) {
//     console.log(n + " is Even");
// } else {
//     console.log(n + " is Odd");
// }


    // wjp to check weather a number is divisible by 5 and 10

//     const prompt = require("prompt-sync")({ sigint: true });

// let n = +(prompt("Enter a number: "));

// if (n % 5 === 0 && n % 10 === 0) {
//     console.log(n + " is divisible by both 5 and 10");
// } else {
//     console.log(n + " is not divisible by both 5 and 10");
// }

    // wjp to find the greatest amonug three number

//     const prompt = require("prompt-sync")({ sigint: true });

// let a = +(prompt("Enter first number: "));
// let b = +(prompt("Enter second number: "));
// let c = +(prompt("Enter third number: "));

// if (a >= b && a >= c) {
//     console.log(a + " is Greatest");
// } else if (b >= a && b >= c) {
//     console.log(b + " is Greatest");
// } else {
//     console.log(c + " is Greatest");
// }

    // wjp to weather the number is positive even ,positive odd

//     const prompt = require("prompt-sync")({ sigint: true });

// let n = +(prompt("Enter a number: "));

// if (n > 0) {
//     if (n % 2 === 0) {
//         console.log(n + " is Positive Even");
//     } else {
//         console.log(n + " is Positive Odd");
//     }
// } else {
//     console.log(n + " is not a positive number");
// }

    // wjp to calculate a shopping discount on parchsing amount

//     const prompt = require("prompt-sync")({ sigint: true });

// let amount = +(prompt("Enter purchase amount: "));
// let discount = 0;

// if (amount >= 5000) {
//     discount = amount * 0.20;
// } else if (amount >= 3000) {
//     discount = amount * 0.15;
// } else if (amount >= 1000) {
//     discount = amount * 0.10;
// }

// let finalAmount = amount - discount;

// console.log("Original Amount: ₹" + amount);
// console.log("Discount: ₹" + discount);
// console.log("Final Amount: ₹" + finalAmount);

    // wjp to chacke weathe rthe given number is single digit 2 digit or 3 digit

const prompt = require("prompt-sync")({ sigint: true });

let n = +(prompt("Enter a number: "));

if ((n >= 0 && n <= 9) || (n >= -9 && n <= 0)) {
    console.log("Single Digit");
} else if ((n >= 10 && n <= 99) || (n >= -99 && n <= -10)) {
    console.log("Double Digit");
} else if ((n >= 100 && n <= 999) || (n >= -999 && n <= -100)) {
    console.log("Three Digit");
} else {
    console.log("More than Three Digit");
}