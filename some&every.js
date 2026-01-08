var nums = [2,4,6,8,10,12,55];

var result = nums.some(function(ele,i,arr) {
    return ele % 2 == 0;
});
console.log(result);

var result2 = nums.every(function(ele,i,arr) {
    return ele %2 == 0;
});
console.log(result2);

//fill() - it fills element in array 
//create an array of 50 elements starting from 1-50

var nums = new Array(50);
var arr2 = nums.fill(0).map(function(n,i) {
    return i + 1;
});
console.log(arr2);

//create an  array of even number of 2-100 
var even = new Array(50);
var arr3 = even.fill(0).map(function(n,i) {
    return (i + 1) * 2;
});
console.log(arr3);
//or second option
var  arr = new Array(100);
var evenArr = arr
.fill(0)
.map(function(n,i) {
    return i + 1;
})
.filter(function(n,i) {
    return n % 2 == 0;
});
console.log(evenArr);

var nums = [10,20,30,40,50,60,70,80,90,100];

const obj = {...nums};
console.log(obj);





