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