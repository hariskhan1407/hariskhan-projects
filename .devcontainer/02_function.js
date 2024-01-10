//rest operator
function calculateCartPrice(val1,val2,...num){
    return console.log(num)
}
calculateCartPrice(200,300,400,500)
//(2 ) [400,500]

const user ={
    name:"Haris",
    price:233
}
function printuser(Here_I_can_pass_anything){
return `my name is ${Here_I_can_pass_anything.name}and price is ${Here_I_can_pass_anything.price}`
}
// console.log(printuser(user))
//my name is Harisand price is 233
//direct obj pass
// console.log(printuser({
//     name:"Khan",
//     price:345
// }))
// my name is Khanand price is 345

//Array

const newArray = [20,34,55,32]

function getSecond(Arrayelement){
return console.log(Arrayelement[1])
}
// getSecond(newArray)
//34
getSecond([3,4,5,6])
//4
