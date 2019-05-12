// 114 filter() map() reduce() example
const students = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87 },
    {name: 'jihyun', age: 31, math: 95, english: 97},
    { name: 'minsup', ag: 35, math: 76, english: 84},
]

const upper80StudentsSum = students
    .filter(student=>student.math>80)
    .map(student=>student.math)
    .reduce((a,b)=>a+b);

console.log(upper80StudentsSum)

// 115 example
const listEmployee = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87, department: 'development' },
    {name: 'jihyun', age: 31, math: 95, english: 97, department: 'design'},
    { name: 'minsup', age: 35, math: 76, english: 84, department: 'development'},
]

const developerAgeList = listEmployee.filter(employee=>employee.department==='development')
    .map(employee=>employee.age)
    .reduce((a,b)=>a+b);

console.log(developerAgeList)

