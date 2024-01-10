//this - current context

const user = {
    username:"Haris",
    price:999,
    welcomeMessage: function(){
        console.log(`Hello, ${this.username}, Welcome to our website`);
        // console.log(this);
        //refer to parent obj user
    }
    
}
user.welcomeMessage()
//Hello, Haris, Welcome to our website
user.username = "Khan"
user.welcomeMessage()
// Hello, Khan, Welcome to our website

console.log(this);
//{} - empty obj
//but in console windows obj

// const me = function(){
//     let username = "Haris"
//     console.log(this.username)
// }
// me()//undefined

//fat arrow function
// const me = () =>{
//     let username = "Haris"
//     console.log(this.username)
// }
// me()//undefined

//explicit return(return use)
// const addnum = (n1,n2) => {
// return n1 + n2
// }

// or
// implicit return(no return use)
// const addnum = (n1,n2) => (n1 + n2)
// console.log(addnum(3,4));//7
//curly braces use so return use
//() - bracet use so no return use

//obj return in bracket
// const objreturn = () => ({username:"Haris"})
// console.log(objreturn())

// {username:"Haris"}

