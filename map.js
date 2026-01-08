//map(function)
// -it accepts a function to be called once for each element of Array
// -it returns a new array of values returned by the callback function
// -the length of the new array willbe same as length of existing array
// -it is preferred when you want to perform operation on element of an array without modifying existing array

var nums = [10, 20, 30, 40, 50, 60, 70, 80];
var newNums = nums.map(function (num, ind, arr) {
  return num + 5;
});

console.log("nums: ", nums);
console.log("newNums: ", newNums);

var cities = [
  "pune",
  "mumbai",
  "Nashik",
  "nagpur",
  "satara",
  "sangli",
  "dhule",
];

var newCities = cities.map(function (city) {
  return city.toUpperCase();
});
console.log(newCities);

//filter(function) - it returns a new array of filtered elements

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNums = nums.filter(function (num) {
  if (num % 2 == 0) return num;

  //or return num % 2 == 0
});
console.log(evenNums);

var cities = [
  "pune",
  "parbhani",
  "satara",
  "sangli",
  "solapur",
  "mumbai",
  "nagpur",
  "nanded",
];

var newCities = cities.filter(function (city) {
  return city.charAt().toLowerCase() != "s";

  //or return !city.includes("s") && !city.includes("S");
});
console.log(newCities);

var users = [
  {
    id: 1,
    name: "aaa",
    mobile: "122222",
    age: 10,
    city: "pune",
    gender: "male",
  },
  {
    id: 2,
    name: "bbb",
    mobile: "11111",
    age: 20,
    city: "mumbai",
    gender: "female",
  },
  {
    id: 3,
    name: "ccc",
    mobile: "333333",
    age: 30,
    city: "pune",
    gender: "male",
  },
  {
    id: 4,
    name: "ddd",
    mobile: "5555",
    age: 40,
    city: "mumbai",
    gender: "female",
  },
  {
    id: 5,
    name: "eee",
    mobile: "44444",
    age: 50,
    city: "pune",
    gender: "male",
  },
  {
    id: 6,
    name: "fff",
    mobile: "6666",
    age: 60,
    city: "mumbai",
    gender: "female",
  },
  {
    id: 7,
    name: "ggg",
    mobile: "777777",
    age: 90,
    city: "pune",
    gender: "female",
  },
  {
    id: 8,
    name: "sss",
    mobile: "99999",
    age: 100,
    city: "nashik",
    gender: "male",
  },
];
var names = users.filter(function (user) {
  return user.city.toLowerCase() == "pune";
});

var male = users.filter(function (user) {
  return user.gender.toLowerCase() == "male";
});

var female = users.filter(function (user) {
  return user.gender.toLowerCase() == "female";
});
console.log(names);
console.log(male);
console.log(female);

//get an array of user ids which are from pune

var names = users
  .filter(function (user) {
    return user.city.toLowerCase() == "pune";
  })
  .map(function (user) {
    return user.name;
  });
console.log(names);


//example of findIndex

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var index = nums.findIndex(function (val, i, arr) {
  return val == 50;
});
console.log(index);

