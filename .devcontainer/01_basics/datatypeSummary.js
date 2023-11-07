//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory
//Stack(Primitive) and Heap(Non-Primitive)(Reference)
//Stack(Primitive) in this no reference values
let name = "Haris";
let realname = name;
realname = "Kaif"
console.log(name);
console.log(realname);
//Heap(Non-Primitive)(Reference) in this reference values
let obj ={
    gmail:"abc@gmail.com",
    insta:"hariskhan_1407"
}
let anotherObj = obj;
anotherObj.gmail = "hariskhan1407@gmail.com";
console.log(obj);
console.log(anotherObj);
//in both gmail is changed 
//if i have to change in only other
let thirdObj = {...anotherObj};//spread operator - Which Spread all the values of object.
thirdObj.gmail = "khan@gmail.com";
console.log(thirdObj);

