var name = 'Haris Khan';
let accountID = 222444555
const accountPassward = 333555666
city = 'allahabad'
let rollno;

name = 'Kaif Khan';
accountID = 333444555
// accountPassward = 444555666 not allowed
city = 'manali'

console.table([name,accountID,accountPassward,city,rollno]);

// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │ 'Kaif Khan' │
// │    1    │  333444555  │
// │    2    │  333555666  │
// │    3    │  'manali'   │
// │    4    │  undefined  │
// └─────────┴─────────────┘
/*
prefer not to use var
because of issue in block scope and functional scope
*/


