//functions

// function sum(a,b){
//     console.log(a+b);
// }

// sum(4,5);

//Invoke Function
// (function (){
//     console.log('hello');
// })()

//arrow function
// const result = (a,b) => a+b

// console.log(result(4,10));


//high order function

function calculate(operation, a, b){
    return operation(a,b);
}

const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

console.log(calculate(div,8,4));