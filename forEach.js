// forEach(function) : it accepts a function as an argument & calls that function for each element of that array
// it doesnot rteurn anything
//it is suitable for performing operations on existing array

var arr = [10, 20, 30, 40, 50, 60, 70, 80];

arr.forEach(function (num, index, arr) {
  console.log(index + " -> " + num);
});
console.log(arr);
arr.forEach(function(n,i,a){
    a[i] = n + 5;
});
console.log(arr);



