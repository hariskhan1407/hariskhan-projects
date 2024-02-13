const num =  [1,2,3]
let newnum = num.reduce((accumulator,currentvalue)=>{
    console.log(`Acc Val:${accumulator} Current Val:${currentvalue}`);
    return accumulator + currentvalue
},0)//after , the value is accumulator value
console.log(newnum);
// Acc Val:0 Current Val:1
// Acc Val:1 Current Val:2
// Acc Val:3 Current Val:3
// 6

let courses = [
{name:'js',prise:599},    
{name:'py',prise:499},
{name:'java',prise:399},
{name:'cpp',prise:299},
{name:'c',prise:199}    
]
let TotalPrice = courses.reduce((accumulatorVal,item)=>accumulatorVal+item.prise,0)
console.log(TotalPrice);
//1995