// 094
const returnFunction = ()=>(a,b)=>a+b;
const plus = returnFunction();
console.log(plus(10, 20))

// 095
const countdown = (value)=>{
    console.log('value: ' , value);
    if (value === 0) return value;
    return countdown(value - 1);
}
console.log('result : ', countdown(20));

// 096 sum n
const sumNumber = (start, end, accumulator)=>{
    if (start > end) return accumulator;
    return sumNumber(start+1, end, accumulator + start);
}
console.log('result: ', sumNumber(1, 10, 0));

// 097 Factorial
const factorial = (n)=>{
    if (n <= 1) return n;
    return factorial(n-1) * n;
}
console.log('factorial = ', factorial(4))

// 098 Fibonacci 
const Fibonacci = (num) => {
    if (num <= 1) return 1;
    return Fibonacci(num - 1) + Fibonacci(num - 2);
}
console.log('Fibonacci = ', Fibonacci(10));

// 099 List Sum
const scores = [85, 95, 76];

const sumList = (scores)=>{
    if (scores.length == 0) return 0;
    return scores[0]+sumList(scores.slice(1));
}
console.log('sumList = ', sumList(scores));

// 100 average List
const averageList = (scores, sum, length)=>{
    if (scores.length === length) return sum/length;
    return averageList(scores, sum+scores[length], length+1)
}
console.log('averageList = ', averageList(scores, 0, 0));

// 101 Closer
function grandParents(g1, g2) {
    const g3 = 3;
    return function parent(p1, p2) {
        const p3 = 33;
        return function child(c1, c2) {
            const c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        }
    }
}

const parentFunction = grandParents(1, 2);
const childFunction = parentFunction(11, 22);
console.log(childFunction(111, 222))

// 102 function composition
const multiple5 = x => x*5;
const add10 = x=>x+10;

const plus_ = (a, b)=>a+b;
const minus_ = (a, b)=>a-b;

console.log(multiple5(add10(20)))

console.log(minus_(plus_(10,20),40))

