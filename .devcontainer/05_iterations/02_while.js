
let i =0
while (i <= 5) {
    console.log(i);
    i= i + 2
}
// 0
// 2
// 4

let myarray = ['haris','khan','kaif','faiz']
let j = 0
while(j<myarray.length){
    console.log(myarray[j]);
    j= j+1
}
// haris
// khan
// kaif
// faiz

// do while : first print then condition cheak

let score = 1
do {
    console.log(`Score is :${score}`);
    score++
} while (score<10);

// Score is :1
// Score is :2
// Score is :3
// Score is :4
// Score is :5
// Score is :6
// Score is :7
// Score is :8
// Score is :9

//agar let score = 11 ker dia
//output
//! Score is :11