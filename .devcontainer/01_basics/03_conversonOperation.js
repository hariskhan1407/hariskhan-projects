let score = "20abc";
console.log(typeof score);//String
let makeNumber = Number(score)
console.log(typeof makeNumber);//Number
console.log(makeNumber);//its NaN
//conversion into no.
//"33" => 33
//"33abc" => NaN(but type is number)
//Boolean
//true => 1
//false => 0

//no. to boolean
let login = 1;
let booleanlogin = Boolean(login);
console.log(booleanlogin)
//1=>true, 2=>false,
//""=>false, "Haris"=>true

//no. to string
let no = 44;
let strno = String(no);
console.log(strno);//44
console.log(typeof strno)//string
