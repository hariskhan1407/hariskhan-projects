//array 
const arr = [1,3,5,6,7,8];//6
const arr2 = new Array(4,5,6,4,3,2);//(6) [4, 5, 6, 4, 3, 2]
// arr2.push(4);//(7) [4, 5, 6, 4, 3, 2, 4]
// arr2.pop()//(6) [4, 5, 6, 4, 3, 2]
// arr2.shift()//(5) [5, 6, 4, 3, 2]
arr2.unshift(19)//start insertion
//value which dosnt exist like 9
console.log(arr2.includes(9))//false
console.log(arr2.indexOf(9))//-1
newarr = arr.join()
console.log(newarr);//1,3,5,6,7,8 -type is string
let sliceSpliceArray = [1,2,3,4,5,6,7,8]
console.log("Slice",sliceSpliceArray.slice(2,5));//Slice (3) [3, 4, 5] -do not change original array
console.log("Splice",sliceSpliceArray.splice(2,5));//Splice (5) [3, 4, 5, 6, 7] -change original array
console.log("Original",sliceSpliceArray);

