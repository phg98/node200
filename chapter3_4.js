// 116 example - average
const students = [
    {name: 'kyeongrok', age: 31, math: 85, english: 87 },
    {name: 'jihyun', age: 31, math: 95, english: 97},
    { name: 'minsup', ag: 35, math: 76, english: 84},
]

const between21to30StudentsAverage = students
    .filter(student=>student.age>21&&student.age<40)
    .map(student=>student.math)
    .reduce((prev, cur, index, array)=> prev + (cur / array.length), 0)

console.log('Average=', between21to30StudentsAverage)


// 117 Promise
const promiseFirst = new Promise(resolve => resolve(1))
    .then(result => `${result+10}`)

const promiseSecond = new Promise(resolve => resolve(1))
    .then(result => `${result + 20}`)

Promise.all([promiseFirst, promiseSecond]).then(result => {
    console.log('result:', result);
    console.log('sum:', Number(result[0]) + Number(result[1]));
});