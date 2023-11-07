// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//Reason is Equality cheack == and comparison <,>,<=,>= works differently
//comparison convert null to 0
console.log(null > 0);//f
console.log(null == 0);//f
console.log(null <= 0);
console.log(null >= 0);//t

//if we write undefined in place of null 
//value always false.

//strict cheack ===
//datatype also cheack

console.log(2 === '2');