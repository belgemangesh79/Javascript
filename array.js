var nums = [10, 20, 30, 40, 50];

//getting length of array
console.log(nums.length); // 5

//add/replace/remove array elements without using built in methods

nums[nums.length] = 60; //add
nums[1] = 200; //replace

//remove element
//delete will create a hole/empty item in the array
//not recommended to delete items
delete nums[2];

console.log(nums);

var nums = [10, 20, 30, 40, 50];

//regular for loop
for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//for in
//it assigns indexes to i till last element
for (var i in nums) {
  console.log(i);
  console.log(nums[i]);
}

//for of
//it extracts element value and assigns it to the left variable until reaches

for (var ele of nums) {
  console.log(ele);
}
//Example 

var nums = [2, 5, 3, 8, 5, 8, 7, 9, 12, 3, 43, 55, 3];
//num = square
//2 = 4
//5 = 25.......
for (var n of nums) {
  console.log(n + "  = ", n * n);
}

//add & remove the array elements using methods 
//push() : inserts one or more elements at the end of array & returns length of array after addition
//unshift(): inserts one or more elements at the start of the array & returns length of array after addition
//pop() : remove & return last element of the array
//shift(): remove & return first element of the array 

var nums = [10,20,30,40,50,];
console.log("*".repeat(40), "push()", "*".repeat(40));
nums.push(60);
var size = nums.push(70,80,90);
console.log(nums);

console.log("*".repeat(40), "unshift()", "*".repeat(40));

nums.unshift(5);
var size = nums.unshift(2,3,4);
console.log(size);
console.log(nums);

console.log("*".repeat(40), "pop()", "*".repeat(40));
console.log(nums.pop());
console.log(nums);

console.log("*".repeat(40), "shift()", "*".repeat(40)); 
console.log(nums.shift());
console.log(nums);








