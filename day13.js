// object built in method
let personaldetails = {
    Name:'srrittam',
    age:25,
    address:'Btm layaout',
    gender:'male',
    contact:'status',
    available:true
}

// ? 1. key()
// console.log(Object.keys(personaldetails))
// ? 2. value()
// console.log(Object.values(personaldetails))
// ? 3. entries() keys + values
// console.log(Object.entries(personaldetails))
// ? 4. 
let mock ={
    python : "1*",
    sql : "*",
    webtech : "1*"
}
let updated = Object.assign(personaldetails,mock)
// console.log(personaldetails)

// ! 5. seal()- prevent from adding and deleting the items 
// ! 5. freeze()- prevent from adding, deleting and updating (modifying) the items 

// Object.seal(mock)
Object.freeze(mock)

mock.Powerbi = "1*"
console.log(mock)

delete mock.webtech
// console.log(mock)

mock.webtech = "1**"
console.log(mock)