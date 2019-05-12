// 103 curring
const add = x => y => x + y;
const add10 = add(10);

console.log(add10(20))
console.log(add(10)(20))

// 104 Curring example 1
const coffeeMachine = liquid => espresso => `${espresso}+${liquid}`;

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);

// Curring example 2
const fs = require('fs');

const openFileAndPrint = path => fileName => fs.readFile(path+fileName, (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

const thisDirOpenFileAndPrint = openFileAndPrint('./');
const otherDirOpenFileAndPrint = openFileAndPrint('../');

//thisDirOpenFileAndPrint('chapter3_2.js')
//otherDirOpenFileAndPrint('package.json');

// 106 Predicate
const isApple = (fruit) => {
    if (fruit === 'apple') return true;
    return false;
}

console.log(isApple('apple'));
console.log(isApple('orange'));

// 107 sort with predicate
const numbers = [1, 2, 19, 38, 4, 98, 25]

const isFirstBiggerThenSecond = (first, second)=>{
    if (first > second) return true;
    return false;
}

const isSecondBiggerThenFirst = (first, second)=>{
    if (second > first) return true;
    return false;
}

const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);
const revsortedNumbers = numbers.sort(isSecondBiggerThenFirst);
console.log(revsortedNumbers);

// 108 filter()
const ages = [11, 12, 13, 16, 21, 31]

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age<13);
const between12and21 = ages.filter(age=> age > 12 && age < 21);

console.log('upper16:', upper16);
console.log('under13:', under13)
console.log('between12and21:', between12and21);

// 109 filter() example
const students = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87 },
    {name: 'jihyun', age: 31, math: 95, english: 97},
    { name: 'minsup', ag: 35, math: 76, english: 84},
]

const mathUpper80 = students.filter(student => student.math>80)
const mathUpper80AndEnglishUpper70 = students.filter(student => student.math>80&&student.english>70)
console.log('mathUpper80:', mathUpper80)
console.log('mathUpper80AndEnglishUpper70:', mathUpper80AndEnglishUpper70);

// 110 map()
const list = [1,2,3];

const multipledList = list.map(item=>item*10)
multipledList.forEach(item=>console.log(item))

// 111 map() example
const listEmployee = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87 },
    {name: 'jihyun', age: 31, math: 95, english: 97},
    { name: 'minsup', ag: 35, math: 76, english: 84},
]

const raisedSalaryList = listEmployee.map(employee => (employee.math + 1.1));
raisedSalaryList.forEach(salay=>console.log('salay=', salay));

// 112 reduce()
const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a,b)=>(a+b));
const sumWithInitValue = scores.reduce((a,b) => (a+b), 10);

console.log('sum:', sum);
console.log('sumWithInitValue:', sumWithInitValue);


// 113 reduce() example
const _students = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87 },
    {name: 'jihyun', age: 31, math: 95, english: 97},
    { name: 'minsup', ag: 35, math: 76, english: 84},
]

const _scores = _students.map(student => student.math);

const _sum = _scores.reduce((a,b)=>a+b, 0);
console.log('.sum:', _sum);