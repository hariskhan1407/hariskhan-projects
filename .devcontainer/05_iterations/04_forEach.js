//forEach takes a callback function
//call back function has no name

const coding = ["js","cpp","py","ruby"]
coding.forEach(function(language){
    console.log(language);
})
//or
coding.forEach((item)=>{
    console.log(item);
})
//or
function print(item){
    console.log(item);
}
coding.forEach(print)
// js
// cpp
// py
// ruby

coding.forEach((itemname,itemnumber,fullArray) => {
    console.log(`Item Name: ${itemname}, Item Number: ${itemnumber}, Full Array: ${fullArray}`);
})

// Item Name: js, Item Number: 0, Full Array: js,cpp,py,ruby
// Item Name: cpp, Item Number: 1, Full Array: js,cpp,py,ruby
// Item Name: py, Item Number: 2, Full Array: js,cpp,py,ruby
// Item Name: ruby, Item Number: 3, Full Array: js,cpp,py,ruby

const knowingLanguages = [
     {file:"js",
     language:"javascript"},
     {file:"py",
     language:"python"},
     {file:"cpp",
     language:"c++"},
     {file:"c",
     language:"c programming"}
]
knowingLanguages.forEach((item)=>{
    console.log(`File name: ${item.file}, Item Name:${item.language}`);
})
// File name: js, Item Name:javascript
// File name: py, Item Name:python
// File name: cpp, Item Name:c++
// File name: c, Item Name:c programming