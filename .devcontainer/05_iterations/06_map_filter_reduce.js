let myNum = [1,2,3,4,5,6,7,8,9]
let newNum = myNum.map((num)=>{
return num+10
})
// console.log(newNum);



// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

// let foreachnum = myNum.forEach((num)=>{
//     return num + 10
// })
// console.log(foreachnum);
//undefined

//if we use map over the map or filter these called chaining

let newNums = myNum
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>50)
                    console.log(newNums);
                    //[ 51, 61, 71, 81, 91 ]