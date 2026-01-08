//object cloning : creating an exact duplicate object from an existing object is called object cloning
//1: shallow cloning: In shallow cloning object cloning only main/ outer object willbe cloned but not nested object
//2: Deep cloning: In deep cloning main/ outer object & nested objects willbe cloned
var person = {
  name: "mangesh belge",
  age: 5,
  address: {
    city: "pune",
    country: "India",
  },
};
//shallow cloning
var person2 = Object.assign({}, person);

//Deep cloning
var person2 = JSON.parse(JSON.stringify(person));

console.log(person);
console.log(person2);

person.name = "abc";
person.address.city = "Mumbai";

console.log(person);
console.log(person2);

//create readonly object
//1:object.preventExtensions()
//2:object.seal()
//3:object.freeze()

var person = {
  name: "mangesh",
  age: 5,
  city: "pune",
};

Object.preventExtensions(person);  //in this cannot add new field
// Object.seal(person);  //in this cannot add new field & cannot remove property
// Object.freeze(person); //in this we cannot do anything  object willbe as it is
//add new field
person.mobile = "12345";

//update existing field
person.age = 3;

//delete a field
delete person.city;

console.log(person);


var person = {
    name: "msb",
    age: 5,
    city: "mukhed",
};

//get only proerty names of object
var names = Object.keys(person);

//get only property values of an object
var values = Object.values(person);

console.log(names);
console.log(values);

