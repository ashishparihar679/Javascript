// // !var
// var a =10
// console.log(a)

// // ! Decleration
// var b;
// console.log("val b before re-Decleration:",b)

// // ! Initialization
// var insti = "pyspiders"
// console.log("val insti before re-Initialization:",insti)


// // ! Re-Decleration &  Re-Initialization

// var b=20 // Re-Decleration
// console.log("val b after re-Decleration:",b)

// insti = "Qspiders" //Re-Initialization
// console.log("val insti after re-Initialization:",insti)

// // Accesibities
// // ? block & function

// // ! If im initial a variable using var outside the block can i access the same variable inside the block?
// // it is possible

// var place = "banglore"
// {
//     console.log("val place accece inside block:",place)
// }

// // ! If im initial a variable using var outside the function can i access the same variable inside the function ?
// // it is possible

// var place = "pune"
// function display()
// {
//     console.log("val place accece inside function:",place)
// }

// // ! If im initial a variable using var outside the function can i access the same variable ouside the function ?
// // it is not possible

// function display(){
//     var isActive = true
// }
// console.log("val place outside the function:",isActive)

// ==========================================
// JavaScript var Keyword
// ==========================================

// ------------------------------------------
// 1. Declaration + Initialization
// ------------------------------------------

var a = 10;
console.log("Value of a:", a);

// ------------------------------------------
// 2. Only Declaration
// ------------------------------------------

var b;
console.log("Value of b before declaration:", b); // undefined

// ------------------------------------------
// 3. Initialization
// ------------------------------------------

var institute = "PySpiders";
console.log("Institute before re-initialization:", institute);

// ------------------------------------------
// 4. Re-Declaration
// (Allowed with var)
// ------------------------------------------

var b = 20;
console.log("Value of b after re-declaration:", b);

// ------------------------------------------
// 5. Re-Initialization
// (Allowed with var)
// ------------------------------------------

institute = "QSpiders";
console.log("Institute after re-initialization:", institute);

// ==========================================
// Scope of var
// ==========================================

// var is Function Scoped
// It is NOT Block Scoped.

// ------------------------------------------
// Example 1:
// Variable declared outside a block
// can be accessed inside the block.
// ------------------------------------------

var place = "Bangalore";

{
    console.log("Inside block:", place);
}

// Output: Bangalore

// ------------------------------------------
// Example 2:
// Variable declared outside a function
// can be accessed inside the function.
// ------------------------------------------

var city = "Pune";

function showCity() {
    console.log("Inside function:", city);
}

showCity();

// Output: Pune

// ------------------------------------------
// Example 3:
// Variable declared inside a function
// cannot be accessed outside the function.
// ------------------------------------------

function checkStatus() {
    var isActive = true;
    console.log("Inside function:", isActive);
}

checkStatus();

// console.log(isActive);
// ReferenceError: isActive is not defined

// let 
// it is a block /func scope variable
// Re-Declaration
// (Not Allowed with let)
//  Re-Initialization
// (Allowed with let)

// CONST 
// const : Re-Declaration is not possible







