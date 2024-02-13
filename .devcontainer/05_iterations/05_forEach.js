const coding = ['js','c++','py']
let coding_item = coding.forEach((item)=>{
    return item
})
// console.log(coding_item);
// undefined
//!we connot return anything in foreach loop

let myNum = [1,2,3,4,5,6,7,8,9] 
// let newNum = myNum.filter((num) => num>4)
// console.log(newNum);

// or

// const newNum = []
// myNum.forEach((num) => {
//     if (num > 4)  {
//         newNum.push(num)
//     }
// } )
// console.log(newNum);

// [ 5, 6, 7, 8, 9 ] 

const books = [
    {
title: 'one',genre:'fiction',publish:1990,edition:2001
    },
    {
title: 'two',genre:'non-fiction',publish:1991,edition:2001
    },
    {
title: 'three',genre:'science',publish:1992,edition:2002
    },
    {
title: 'four',genre:'fiction',publish:1993,edition:2003
    },
    {
title: 'five',genre:'science',publish:1994,edition:2004
    }
];
let userBooks = books.filter((bk)=>bk.genre==='science')
// console.log(userBooks);
// [
//     { title: 'three', genre: 'science', publish: 1992, edition: 2002 },        
//     { title: 'five', genre: 'science', publish: 1994, edition: 2004 }
//   ]

userBooks = books.filter((bk) => bk.publish>1992)
// console.log(userBooks);
// [
//     { title: 'four', genre: 'fiction', publish: 1993, edition: 2003 },
//     { title: 'five', genre: 'science', publish: 1994, edition: 2004 }
//   ]

userBooks = books.filter((bk) => {return bk.edition <= 2002})
// console.log(userBooks);
// [
//     { title: 'one', genre: 'fiction', publish: 1990, edition: 2001 },
//     { title: 'two', genre: 'non-fiction', publish: 1991, edition: 2001 },      
//     { title: 'three', genre: 'science', publish: 1992, edition: 2002 }
//   ]

userBooks = books.filter((bk) => {return bk.edition<= 2002 && bk.genre === 'science' })
// console.log(userBooks);
// [ { title: 'three', genre: 'science', publish: 1992, edition: 2002 } ]
