// const tinderUser = new Object()//{} and its singleton
const tinderUser = {}//{}
tinderUser.name ="Haris Khan"
tinderUser.id = 7943
tinderUser.loggedIn = false
// console.log(tinderUser);
// name: 'Haris Khan', id: 7943, loggedIn: false}

// obj inside obj

const regularUser = {
    user1:{
        firstname:"Haris",
        lastName:"Khan"
    },
    userId:5665
}
console.log(regularUser.user1.lastName)//Khan

//Two object conversion

const obj1 = {
    1:'a',
    2:'b'
}
const obj2 = {
    3:'c',
    4:'d'
}
const obj3 = Object.assign(obj1,obj2)
const obj4 = {...obj1,...obj2}
//{1: 'a', 2: 'b', 3: 'c', 4: 'd'}

//keys and values

console.log(Object.keys(tinderUser))
//(3) ['name', 'id', 'loggedIn']
console.log(Object.values(tinderUser))
//(3) ['Haris Khan', 7943, false]
console.log(Object.entries(tinderUser))
//(3) [Array(2), Array(2), Array(2)]
//Cheak having property or not
console.log(tinderUser.hasOwnProperty("name"))//true



const users = [
    {
        name:"Haris",
        login:false
    },
    {
        name:"Khan",
        login:false
    },
    {
        name:"Mohammad",
        login:false
    }
]
console.log(users[2].name)//Mohammad

//obj destructuring
const course = {
    name:"js in Hindi",
    instructor:"hitesh"
}
const {instructor} = course
console.log(instructor)//hitesh

//object without any name is called json(js obj notation)
// {
//     "name":"js in Hindi",
//     "instructor":"hitesh"
// }

// [
//     {},
//     {},
//     {}
// ]




