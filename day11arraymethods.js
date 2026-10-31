// Array Methods
//      │
//      ├── toString()  → Array → String
//      │
//      ├── pop()       → Remove from END
//      │
//      ├── push()      → Add to END
//      │
//      ├── shift()     → Remove from START
//      │
//      ├── unshift()   → Add to START
//      │
//      ├── join()      → Array → String with separator
//      │
//      └── concat()    → Combine arrays

// Rest Operator
//      │
//      └── ...         → Collect multiple arguments

// ======================================================
//              JAVASCRIPT ARRAY BUILT-IN METHODS
// ======================================================

let Names = ["Rahul", "Rohit", "Amit", "Neha"];


// ======================================================
// 1. toString() Method
// ======================================================

// Converts an array into a string.

// console.log(Names, typeof Names);

// let convertarr = Names.toString();

// console.log(convertarr, typeof convertarr);


// ======================================================
// 2. pop() Method
// ======================================================

// Removes the last element from an array.
// Returns the removed element.
// Changes the original array.

// Names.pop();

// console.log(`Pop Method : ${Names}`);
// console.log(Names);


// ======================================================
// 3. push() Method
// ======================================================

// Adds one or more elements to the end of an array.
// Returns the new length of the array.
// Changes the original array.

// Names.push("Ashish", "Parihar");

// console.log(`Push Method : ${Names}`);
// console.log(Names);


// ======================================================
// 4. shift() Method
// ======================================================

// Removes the first element from an array.
// Returns the removed element.
// Changes the original array.

// Names.shift();

// console.log(`Shift Method : ${Names}`);
// console.log(Names);


// ======================================================
// 5. unshift() Method
// ======================================================

// Adds one or more elements to the beginning of an array.
// Returns the new length of the array.
// Changes the original array.

// console.log("Unshift Method");

// Names.unshift("Ashish");

// console.log(Names);


// ======================================================
// 6. join() Method
// ======================================================

// Converts array elements into a string.
// The specified separator is placed between elements.

// let result = Names.join("-");

// console.log(`Join Method : ${Names}`);
// console.log(result);


// ======================================================
// 7. Rest Operator
// ======================================================

// Rest Operator (...) collects multiple arguments
// and stores them inside an array.

// function sum(...a) {
//     return a;
// }

// console.log(`Rest Operator : ${sum(100, "Rohit", true)}`);
// console.log(sum(100, "Rohit", true));


// ======================================================
// 8. concat() Method
// ======================================================

// Combines two or more arrays.
// It does NOT change the original array.

// let village = ["Talapda", "Khariaguda", "Srirampur"];

// console.log(village.concat(Names, [20, 30, 19]));

// console.log(Names);

// ? 8. slice()

let Names1 = ["Rahul", "Rohit", "Amit", "Neha","anshu","ajay","anil"];

// console.log(Names1);
// let a = Names1.slice(0,2)
// let b = Names1.slice(-1,-3)
// console.log(a); // [ 'Rahul', 'Rohit' ]
// console.log(b); // []


// ? 9. splice()
//  it removes the elements from the existing array
// let remove = Names1.splice(2,4)
// console.log(Names1); // [ 'Rahul', 'Rohit', 'anil' ]

// ? 10. reverse()
 
// console.log(Names1.reverse() ); 
//[
//   'anil',  'ajay',
//   'anshu', 'Neha',
//   'Amit',  'Rohit',
//   'Rahul'
// ]

// for (let i = 0; i < Names1.length; i++) {
//     console.log(Names1[i])
// }

// // 11. map() :- it will return the array
// let res = Names1.map((items)=>{
//      console.log(items)
//     })
//     console.log(typeof res) // object
    
//     // 12. foreach() :- it will not return the array
//     let res2 = Names1.forEach((items)=>{
//         console.log(items)
//     })
//     console.log(typeof res2) //undefined

// // ? filter() - it will iterate through the array based on condition
// let nums = [1,2,3,4,5,6]

// let evenNums = nums.filter((items)=>{
//     return items % 2 === 0
// })
// console.log(evenNums)  // [ 2, 4, 6 ]



// ? reduce()-
let num = [1,2,3,4]
let sum = num.reduce((acc,currVal)=>{
    return acc + currVal
})
console.log(sum)


