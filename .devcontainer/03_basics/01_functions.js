function addTwoNumbers(num1,num2){//parameters
console.log(num1+num2)
}
// addTwoNumbers(2,4)//arguments
//6
//after return code dont work
function addTwoNumbers2(num1,num2){//parameters
    return console.log(num1+num2)
    }
    // addTwoNumbers2(3,4)

function loginUserMessage(username){
    if(!username){
        console.log("Enter username")
    }
    else{

        return `${username} just logged in!`
    }
}
console.log(loginUserMessage("Haris"))
//Haris just logged in!
console.log(loginUserMessage())
//Enter username
//undefined
//default value
function loginUserMessage2(username = "Haris"){
   console.log(username)
}
loginUserMessage2()//Haris