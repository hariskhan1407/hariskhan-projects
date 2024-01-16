//if
// if(condition){}
// if(true){}               //execute
// if(false){}              //no execute
//comparison operator - <,>,<=,>=,==,!=,===
const temperature = 42
if(temperature !== 42){
    console.log(true);
}
else{
    console.log(false)
}
console.log("execute");

const score = 100
if(score>50){
    const power = "fly"
    console.log(`User Power:${power}`);
}
//User Power:fly
// console.log(`User Power:${power}`);
//throws error because its in local scope if their is a var in place of const so no error

//Short Hand notation

// const balance = 20
// if (balance ==20) console.log("pass"),console.log("great");
//not recommended
// pass
// great

const userloggedin = true
const payment = true
const loggedinfromGoogle = false
const loggedinfromEmail = true
if (userloggedin && payment){
    //both should true
    console.log("you are enrolled in this course");
}
//you are enrolled in this course
if (loggedinfromEmail || loggedinfromGoogle){
    //one should true
    console.log("you are logged in");
}
//you are logged in
