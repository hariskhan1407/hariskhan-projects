//2 type of object declare 1.constructor 2.literal
// constructor (singleton)
// Object.create

//obj literals

//symbol declaration
const sym1 = Symbol("key1");
 const Jsuser = {
    name:"Haris",
    "full name":"Haris Khan",
    email: "sam@gmail.com",
    isLoggedIn: false,
    //symbol usage in obj
    [sym1]:"key1hihai"
 }
 console.log(Jsuser.name);//Haris
 console.log(Jsuser["full name"]);//Haris Khan
 console.log(typeof Jsuser[sym1]);//string
 console.log(Jsuser[sym1])//key1hihai
 //change prop.
 Jsuser.email="Haris@gmail.com"
 console.log(Jsuser.email)//Haris@gmail.com
 //after freeze cant change any prop.
//  Object.freeze(Jsuser)
 Jsuser.email="Khan@gmail.com"
 console.log(Jsuser.email)//Haris@gmail.com
 //`` - under backtick string interpolation
 Jsuser.greeting = function(){
    console.log(`Good Morning! ${this.name}`)
 }
console.log(Jsuser.greeting())//Good Morning! Haris
                              //undefined

