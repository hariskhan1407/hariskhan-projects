//dates
// const date = new Date();
// console.log(date);//Wed Nov 08 2023 08:23:35 GMT+0000 (Coordinated Universal Time)
// console.log(date.toString());
// console.log(date.toDateString());//Wed Nov 08 2023
// console.log(date.toLocaleString())//11/8/2023, 8:28:02 AM
// console.log(date.toLocaleDateString())//11/8/2023

const myCreatedDate = new Date(2003,6,14,5,8,30)//month starts from 0
console.log(myCreatedDate.toDateString())//Mon Jul 14 2003
console.log(myCreatedDate.toLocaleString())//7/14/2003, 5:08:30 AM
//dd-mm-yy format
const bd = new Date("1-7-2023");
console.log(bd.toLocaleString());//1/7/2023, 12:00:00 AM

const timestamp = Date.now();
console.log(timestamp)//1699433335612 - this is from 1st jan 1970
// lets convert into second
console.log(Math.floor(timestamp/1000));

const newdate = new Date()
console.log(newdate.getDate()+"  "+newdate.getMonth()+"  "+newdate.getFullYear());

