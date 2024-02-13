//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//     if(element == 5){
//         console.log("5 is the best no.");
//     }
// }

// 0
// 1
// 2
// 3
// 4
// 5 is the best no.
// 6
// 7
// 8
// 9
// 10

// console.log(element);
//not defined out of scope

//! Outer loop and inner loop

for (let i = 0; i <= 3; i++) {
    console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 3; j++) {
        console.log(`Inner loop ${j} because Outer Loop value is ${i}`);
    }
}
// Outer loop 0
// Inner loop 0 because Outer Loop value is 0
// Inner loop 1 because Outer Loop value is 0
// Inner loop 2 because Outer Loop value is 0
// Inner loop 3 because Outer Loop value is 0
// Outer loop 1
// Inner loop 0 because Outer Loop value is 1
// Inner loop 1 because Outer Loop value is 1
// Inner loop 2 because Outer Loop value is 1
// Inner loop 3 because Outer Loop value is 1
// Outer loop 2
// Inner loop 0 because Outer Loop value is 2
// Inner loop 1 because Outer Loop value is 2
// Inner loop 2 because Outer Loop value is 2
// Inner loop 3 because Outer Loop value is 2
// Outer loop 3
// Inner loop 0 because Outer Loop value is 3
// Inner loop 1 because Outer Loop value is 3
// Inner loop 2 because Outer Loop value is 3
// Inner loop 3 because Outer Loop value is 3

for (let i = 1; i <= 3; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${j*i}`);
    }    
}

// Table of 1
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// 1 * 4 = 4
// 1 * 5 = 5
// Table of 2
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// Table of 3
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15

let myarray = ['superman','batman','spiderman']
console.log(myarray.length);
//3
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}
// superman
// batman
// spiderman

//!if we don't use index++ so first thing is printing infinite that time jab tak memory full na ho

//! break and continue
 
//break : for break the control flow

for (let index = 0; index < 20; index++) {
    console.log(index);
    if(index == 5){
        console.log(`5 is detected!`);
        break
    }
}
// 0
// 1
// 2
// 3
// 4
// 5
// 5 is detected!
for (let index = 0; index < 10; index++) {
    console.log(index);
    if(index == 5){
        console.log(`5 is detected!`);
        continue
    }
}
//0
// 1
// 2
// 3
// 4
// 5
// 5 is detected!
// 6
// 7
// 8
// 9