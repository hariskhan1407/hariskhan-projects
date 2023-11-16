const hollywood = ["Tom Cruise" , "Rock" , "Arnold"]
const bollywood = ["Salman" , "Shahrukh" , "Amir" , "Hritikh"]

// hollywood.push(bollywood)//(4) ['Tom Cruise', 'Rock', 'Arnold', Array(4)]
// console.log(hollywood[3][2])//Amir

// const allHeroes = hollywood.concat(bollywood)
// console.log(allHeroes)//(7)['Tom Cruise', 'Rock', 'Arnold', 'Salman', 'Shahrukh', 'Amir', 'Hritikh']

//using spread(...) -Most used
// const allHeroes = [...bollywood,...hollywood]
// console.log(allHeroes);//(7) ['Salman', 'Shahrukh', 'Amir', 'Hritikh', 'Tom Cruise', 'Rock', 'Arnold']

const complicated_array = [1,2,3,4,5,[1,2,3,[2,3,4,5,[3,4,6]]],[3,5,6]]
console.log(complicated_array.flat(Infinity))//(18) [1, 2, 3, 4, 5, 1, 2, 3, 2, 3, 4, 5, 3, 4, 6, 3, 5, 6]
//here depth is infinity we con use any debth eg.1,4,3 etc.

console.log(Array.isArray("Haris"));//false
console.log(Array.from("Haris"));//(5) ['H', 'a', 'r', 'i', 's']
console.log(Array.from({name:"Haris"}));//[]
//intresting
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))

