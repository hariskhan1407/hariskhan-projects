// const userEmail = "lafjlk"
// const userEmail = []
const userEmail = ''


if(userEmail){
    console.log("got email");
}else{
    console.log("do not got email");
}
//In first 2 cases:
//got email

//for third case
//do not got email

//! All Falsy Values
//! false, 0, -0, BigInt 0n, "", null , undefined , NaN
//!Except these all are Truthy values

//! Truthy values Eg:
//! " " (space b/w str.) , {} , [] , function(){} (Empty function)
//! anything under "" string is truthy value
//! Eg: "0", 'false'

const EmptyArray = []

if (EmptyArray.length === 0) {
    console.log("No elements present");
}//no element present

const EmptyObj = {}

if (Object.keys(EmptyObj).length === 0) {
    console.log("No elements present");
}//no element present
//Object.keys() - convert obj into array

console.log(false == 0);
console.log(false == '');
console.log(0 == '');
//!all three are true


//!  && and operator & || or operator are logical operators

//! Nullish Colescing Operator (??) : null, undefined
//by this we use like if we have more than 1 value 
//By using ?? this operator if anyone of giving null or undefined
//so it gives the another output

// let val1 = 5 ?? 10
//5
// let val1 = undefined ?? 10
//10
// let val1 = null ?? 10
//10
// let val1 = null ?? 10 ?? 20
//10
// console.log(val1);

//!Terniary Operator

//condition ? true : false

const IceTea = 100
IceTea >= 80 ? console.log("More Price") : console.log("Less Price");
//More Price

