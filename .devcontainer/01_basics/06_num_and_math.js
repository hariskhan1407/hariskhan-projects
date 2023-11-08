const score = 100;
console.log(score);//100

const balance =new Number(200);
console.log(balance)//[Number: 200]

console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//200.00

console.log(score.toFixed(1))//100.0
const point = 234.4543;
console.log(point.toPrecision(4))//234.5

const hundreds = 10000000;
//international
console.log(hundreds.toLocaleString())//10,000,000
//indian
console.log(hundreds.toLocaleString('en-IN'))//1,00,00,000

// ++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++

console.log(Math);
const value = -34;
console.log(Math.abs(value))//only negative to positive
console.log(Math.round(4.67))//5
console.log(Math.ceil(4.33))//5
console.log(Math.floor(4.99))//4
console.log(Math.min(3,5,3,2,6,7))//2 Like this there is max() also

//in ludo we want to get random values b/w 1 and 6

const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(max-min+1)+min));
