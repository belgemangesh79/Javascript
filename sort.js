var nums = [23, 9, 5, 100, 30, 89, 60];

// nums.sort();
// console.log(arr);
nums.sort(function (a, b) {
  return a - b; // for descending order b - a
});
console.log(nums);




var cities = ["Pune", "nashik", "satara", "sangli", "mumbai", "pandharpur"];

cities.sort(function (a, b) {
  return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt();
});
console.log(cities);


var str = "ZzdcbaDCBA";

var arr = str.split("");

arr.sort(function(a,b) {
    return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt();
});

var sstr = arr.join("");
console.log(str);
console.log(sstr);

