 //{} scope 
 let b=34
 var a = 300
 if(true){
    var a =1
    let b=2
    const c=3
   //  console.log("B inner:", b)//B inner: 2
 }
 //because var is not scoped
//  console.log(c);//error not defined
//  console.log("B:outer",b);//B:outer 34
//  console.log(a);//1
 //global scope different in browser and in node js

//  chote bache bado se 🍦 mag sakte hai but
//  bade choto se 🍦 ni mang sakte
 function one(){
   const username = "Haris"
   function two(){
      const website = "Haris.com"
      console.log(username)
   }
// console.log(website)
//because website scope out of scope ni hogi
two()
 }
 one()
 //Haris
 //ander ka function bahar k variable access kerra thats closure

 if(true){
   const username = "Haris"
   if(username === "Haris"){
      const website = " YOutube"
      console.log(username + website);
   }
   // console.log(website);
   //not defined error
 }//Haris YOutube
//  console.log(username);
//not defined error



//function
console.log(addone(2));
//3
function addone(num){
   return num + 1
}
//expression
// console.log(addtwo(2));
//error cant use before declaration
const addtwo = function(num){
   return num + 2
}
 