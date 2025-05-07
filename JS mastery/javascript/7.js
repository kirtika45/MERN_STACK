let colors = new Set(['blue','green','orange','red']);
for(let color of colors){
    console.log(color)
}
// blue
// green
// orange
// red

colors.forEach(color => console.log(color));
//blue
// green
// orange
// red

// map()
let userMap = new Map();
userMap.set("name","kishi");
userMap.set("age",21);
userMap.set("city","mumbai");

console.log(userMap);
//Map(3) { 'name' => 'kishi', 'age' => 21, 'city' => 'mumbai' }

let userMap2 = new Map([
    ["name","kishi"],
    ["age",21],
    ["city","mumbai"]
]);
console.log(userMap2);
//Map(3) { 'name' => 'kishi', 'age' => 21, 'city' => 'mumbai' }
for(let [key,value] of userMap2){
    console.log([key,value]);
}
// [ 'name', 'kishi' ]
// [ 'age', 21 ]
// [ 'city', 'mumbai' ]

for(let [key,value] of userMap2){
    console.log(`${key}:${value}`);
}
// name:kishi
// age:21
// city:mumbai

