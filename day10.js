// !    IIFE =mIMMEDIATELY INVOKED FUNCTION EXPRESSION
//  .THIS FUNCTION IS AUTOMATICALLY CALLED

// ((a,b)=>{
// console.log(a+b)
// })(10,2)

// let a = 20
// let b = 10
// console.log(a + b);

// (()=>{
//     console.log("hello")
// })()

// 1.WHAT IS CALLBACK FUNCTION AND HIGHER ORDER FUNCTION
// 2.DIFFRENCE BETWEEN HIGHERT ORDER FUN AND CALLBACK FUN WITH EXAMPLE

function Display1(){
    console.log("Monday")
}
function Display2(){
    console.log("tuesday")
}
function Display3(){
    console.log("GET LOST")
}

// Display1(Display3())
// ! here innermost function will be executed first then the outermost
// ! innermost function is called as Call-Back function
// ! Outermost function is called as Higher-Ordered function
// Display2()

Display1(Display2(Display3()))