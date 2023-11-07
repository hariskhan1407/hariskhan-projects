let score = "20abc";
console.log(typeof score);//String
let makeNumber = Number(score)
// console.log(typeof makeNumber);//Number
// console.log(makeNumber);//its NaN
//conversion into no.
//"33" => 33
//"33abc" => NaN(but type is number)
//Boolean
//true => 1
//false => 0

//no. to boolean
let login = 1;
let booleanlogin = Boolean(login);
// console.log(booleanlogin)
//1=>true, 2=>false,
//""=>false, "Haris"=>true

//no. to string
let no = 44;
let strno = String(no);
// console.log(strno);//44
// console.log(typeof strno)//string

//Operations
let val = 3;
let negVal = -val
console.log(negVal);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//power
console.log(2/2);
console.log(2%2);

let name = "Haris"
let greeting = " Good Morning "
console.log(greeting+name);

// console.log('1'+2);
// console.log(1+'2');
// console.log(1+1+'2');////if number first then all treated as number until string comes
// console.log('1'+2+2);//if string first then all treated as string

// console.log(+true);//1
// console.log(+false);//0
// console.log(-true);//-1
// console.log(-false);//-0

// console.log("");
// console.log(+"");//0
// console.log(-"");//-0

let num1, num2, num3;
num1, num2, num3 = 2+2;
console.log(num2);//undefined 

let gameScore =100;
console.log(gameScore++);
console.log(gameScore);
console.log(++gameScore);