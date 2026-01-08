const arr= [10,20,30,40,50,60,70,80,90];

console.log(arr);  //o/p[10,20,30,40,50,60,70,80,90]

console.log(...arr);  //10,20,30,40,50,60,70,80,90


console.log(Math.min(...arr));
console.log(Math.max(...arr));


//concat the array

var arr2 = [1,2,3,4,5,];
var arr3 = [100,300,400];
var arr4 = [...arr2, ...arr3,700,800,900];

console.log(arr4);


//spread operator (...) in JavaScript is used to expand (spread) elements of an array, object, or iterable.

// It makes copying, combining, and passing data easier.



