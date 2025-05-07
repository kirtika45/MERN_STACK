//Objects

// let person = {
//     name : "John",
//     age : 21,
//     city : 'Dublin'
// }

// delete person.city;
// console.log(person.name);
// console.log(person["name"]);
// console.log(person)


let person = {
    name : "kishi",
    age : 21,
    city : "hyderabad"
}

let keys = Object.keys(person);
console.log(keys)
//[ 'name', 'age', 'city' ]

let values = Object.values(person)
console.log(values)
//[ 'kishi', 21, 'hyderabad' ]

let entries = Object.entries(person)
console.log(entries)
//[ [ 'name', 'kishi' ], [ 'age', 21 ], [ 'city', 'hyderabad' ] ]

let newPerson = Object.assign({},person);
console.log(newPerson)
//{ name: 'kishi', age: 21, city: 'hyderabad' }


person.num = 10;
console.log(person)
//{ name: 'kishi', age: 21, city: 'hyderabad', num: 10 }

Object.freeze(person);
console.log(person);
//{ name: 'kishi', age: 21, city: 'hyderabad', num: 10 }

console.log(newPerson);
// { name: 'kishi', age: 21, city: 'hyderabad' }

Object.freeze(newPerson);
newPerson.number = 85749;
console.log(newPerson);
// { name: 'kishi', age: 21, city: 'hyderabad' }


let person2 = {
    name : 'kishi',
    age : 21, 
    city : 'vizag',
    greet: function(){
        console.log('this is a function');
    },
    subject : {
        math : 92, 
        science : 95
    }
}

console.log(person2.subject.math);
//92

let mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('grapes');
console.log(mySet);
//Set(3) { 'apple', 'banana', 'grapes' }

console.log(mySet.has('banana'));
//true

console.log(mySet.size);
//3

mySet.clear();
console.log(mySet)
//Set(0) {}

