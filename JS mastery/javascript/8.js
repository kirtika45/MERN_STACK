//for in, for of, lexical scope, closure more

let fruits = ['apple','banana','grapes'];
for(let index in fruits){
    console.log(index);
}
// 0
// 1
// 2

for(let index of fruits){
    console.log(index);
}
// apple
// banana
// grapes

let person = {
    name : "kishi",
    age : 21, 
    city : "mumbai"
}
for(let key in person){
    console.log(key)
}
// name
// age
// city

// for(let key of person){
//     console.log(key);
// }
// for(let key of person){
//     ^
// TypeError: person is not iterable

for(let key of Object.keys(person)){
    console.log(key)
}
// name
// age
// city


for(let value of Object.values(person)){
    console.log(value)
}
// kishi
// 21
// mumbai

// let a = 10
// let b = 10
// console.log(a+b);
//20

// let a = "10"
// let b = 10
// console.log(a+b)
// 1010

// let a = "10"
// let b = 10
// console.log(a-b)
// console.log(a*b)
// console.log(a/b);
// console.log(a**b)
//0
// 100
// 1
// 10000000000

// let a = 10;
// let b = true
// console.log(a+b);
// console.log(a-b)
//11
//9

// let a = 10
// let b = false
// console.log(a+b);
//10

// let a = 10
// let b = Boolean
// console.log(a+b);
//10function Boolean() { [native code] }

// let a = 10
// let b = undefined
// console.log(a+b);
//NaN

// let a =  10
// let b = null
// console.log(a+b);
//10

//LEXICAL SCOPE
//It accesses its variable from its outer scope.

// ex:-

// function lexical_scope(){
//     let a =  "hello world!"

//     function inner_lexical(){
//         console.log(a)
//     }
//     inner_lexical()
// }

// lexical_scope();
// hello world!


// let a =  "hello world!"
// function lexical_scope(){
    

//     function inner_lexical(){
//         console.log(a)
//     }
//     inner_lexical()
// }

// lexical_scope();
// hello world!