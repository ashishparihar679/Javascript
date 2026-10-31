let personaldetails = {
    Name:'srrittam',
    age:25,
    address:'Btm layaout',
    gender:'male',
    contact:'status',
    available:true
}
// console.log(personaldetails)
// console.log(typeof(personaldetails))

// ! Add new pair(key & value) to the existing object
personaldetails.email='srittam123@gmail.com'
// console.log(personaldetails)

// ! update the value
personaldetails.available=false
// console.log(personaldetails)

// ! DELETING THE ITEM
delete personaldetails.email
// console.log(personaldetails)

// ! STRING INTERPOLATION 
let Name = "sita"
let gender = "female"

console.log(`my name is ${Name} and i'm ${gender}`)

// ! fetching the values
console.log(personaldetails.gender)
console.log(`${personaldetails.Name} gender is ${personaldetails.gender}`)