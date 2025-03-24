console.log(2>1);
// console.log(2>=6);

// console.log("2">1);     //will return but might not give the expexted value, so both value should be of same datatype
// console.log("02">1);

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0);  //true: don't give the 'expected' result as of different datatype: comparision convert the  
                         // null into number treating as 0 or 1 randomly
//Comparision operator as >,<,<=,>= works differently that normal relational <,>,

//=== strictly check

//console.log("2" == 2);   //not value thus return true
//console.log("2" === 2);  //false as have differnt data type

const temp = null
let email;          //undefined

const id = Symbol('123')        //used to represent uniqueness
const id2 = Symbol('123')

console.log(id === id2); //false
console.log(id == id2);     //false

const bigInt = 4654546545947546976547970n    //if n is not placed then "4.654546545947547e+24"
console.log(bigInt);

console.log(typeof bigInt);     //return bigInt



//array, Objects, Function : Non-Primitive

const info1 = ["saurav", 45, true];   //array

const info2 = {                         //object
    name : "saurav",
    age : 23,
    dil : true,
}

const myFunction = function(){          //function
    console.log("Hello function");
    
}

console.log(typeof info1);     //return object
console.log(typeof info2);     //return onject for all non-primitive


console.log(typeof myFunction);     //return function
console.log(myFunction)             //return [Function: myFunction]




