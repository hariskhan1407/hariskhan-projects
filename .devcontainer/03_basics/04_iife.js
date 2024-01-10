//immidiately invoked function expression


//function defination
//named iife
(function user(){
    console.log("hello")
})();//execution call
//why iife
//Have problems in globalscope pollution to remove that pollution we use iife
// ; is important after iife without ; we cant use another iife
//() here we can write parameters also
((name)=>{
    console.log(`My name is ${name}`);
})("kala");