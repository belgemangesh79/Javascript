var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//splice() - returns an array of deleted elements
console.log(nums.splice(3));
console.log(nums);

console.log(nums.splice(3, 2));
console.log(nums);

// replace 50 by 500
console.log(nums.splice(4, 0, 500));
console.log(nums);

//example
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//output= [1,0,3,0,5,0,7,0,9,0]

for (i = 0; i < nums.length; i++) {
  var n = nums[i];
  if (n % 2 == 0) {
    nums.splice(i, 1, 0);
  }
}
console.log(nums);

//find duplicate from an array
var nums = [10, 20, 30, 10, 20, 40, 50, 10, 30, 50, 50, 50, 50, 30];
for (i = 0; i < nums.length; i++) {
  if (nums[i] == 0) continue;
  var count = 1;

  for (var j = i + 1; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      count++;
      nums[j] = 0;
    }
  }
  console.log(nums[i], " -> ", count);
}

//creating sub arrays
var nums = [10,20,30,40,50,60,70,80,90,100];

var arr1 = nums.slice(0,4);  //[10,20,30,40]
var arr2 = nums.slice(2,7); //[30,40,50,60,70]
var arr3 = nums.slice(7);  //[80,90,100]

console.log(arr1);
console.log(arr2);
console.log(arr3);

//concatenating multiple arrays into single
var a = [1,2,3,4,5];
var b = [10,20,30,40,50];
var c = [100,200,300,400,500];

