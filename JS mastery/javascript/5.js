//while, for loop

// for(let i = 1; i<= 10; i++){
//     console.log(i);
// }

// let x = 20
// while(x>=10){
//     console.log(x);
//     x--;
// }

//do while

// let a = 1;
// do{
//     console.log(a);
//     a++;
// }while(a<=10);


//continue


// let x = 20
// while(x>=10){
//     x--;
//     if(x==14){
//         continue;//does not print 14
//     }
//     console.log(x);
// }

//arrays

// let student = ["kishi","sahil","sunidhi","tushar"];
// console.log(student[0]);
// console.log(student.indexOf('sahil'));
// console.log(student.includes("logan"));
// student.push("Logan");

// console.log(student.slice(2,3));
// console.log(student.splice(2,2));


//map

// let numbers = [1,2,3,4,5];
// let doubles = numbers.map(numbers => numbers * 2);
// console.log(doubles);

//reduce
// let red = numbers.reduce((acc,num) => acc + num,0);
// console.log(red);

//filter
// let fil = numbers.filter(num => num % 2 ==0)
// console.log(fil)
 
//every

// some


//sort
// let numbers = [34,65,6,24,9];
// let result = numbers.sort((a,b)=> a-b);
// console.log(result)


// let numbers = [13,3,36542];
// let result = numbers.reverse();
// console.log(result)


// let seta = ['john', 'fricky','rahul','manisha'];
// let result = seta.splice(2,3);
// console.log(result);
//rahul, manisha

// let seta = ['john', 'fricky','rahul','manisha'];
// let result = seta.slice(2,3);
// console.log(result);
//rahul

// let numbers =[2,3,5];
// let result = numbers.map((a) => a*2);
// console.log(result);
//4,6,10

// let numbers = [2,4,64,27];
// let result = numbers.filter((num) => num % 3 == 0);
// console.log(result);
//27

// let seta = ['john', 'fricky','rahul','manisha'];
// let result = seta.find((acc) => acc == 'johnny');
// console.log(Boolean(result));
// console.log(result);
//true
//undefined


//join

// let word = ["hello","world"]; //array
// let sentence = word.join(" ");
// console.log(sentence);
