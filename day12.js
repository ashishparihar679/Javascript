let strA ="pyspider"
let strB ="BENGALORE"

// 1.toUpperCase()-
console.log(strA.toUpperCase())
// 2.toLowerCase()-
console.log(strB.toLowerCase())
// 3.length-
console.log(strA.length)

// 4.slice()-
console.log(strA.slice(1,2))
// 5.replace()-
console.log(strB.replace("B","ashish"))
// 6. concat()-
console.log(strA.concat(strB))

let place = "                   BTM                      "
console.log(place)
console.log(place.trim())
// ? trimstart()-
console.log(place.trimStart())
console.log(place.trimEnd())
// ? trimend()-

// 10. split it will return the array []  of string element

let personal = "My name is bhavesh i'm 20 years old"
console.log(personal.split(" ",3)) // [ 'My', 'name', 'is' ]
console.log(personal.split("'",2))
console.log(personal.split("$",5))