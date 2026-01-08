// Object property names :
// property names must be unique within on Object
// -proerty names should follow lower camel casing like variables Ex: firstName, setName,age
// -if there is space between property name then property name must be enclosed within double quotes "".  Ex : "first name"
// -if a variable value is used as property name then enclose the vazriable in square brackets Ex: [variableName]

var x = "city";

var person = {
  firstName: "mangesh",
  "last name": "belge",
  x: 10,
  [x]: "pune",
};
console.log(person);

//object property value:
//-an object property can have any type of value
// a variable can be used as property value
var email = "belgemangesh79@gmail.com";
var person = {
  name: "mangesh belge",
  age: 30,
  isActive: true,
  address: {
    street: "navle park",
    city: "pune",
  },
  gst: undefined,
  mobile: ["87656576567", "7678689"],
  adhar: null,
  email: email,
  profile: function () {
    console.log(this.name);
  },
};
console.log(person);
person.profile();

//object method
var per = {
    name: "mangesh belge",
    m1() {
        console.log("Name", this.name);
        
    },
    m2: function() {
        console.log("Name", this.name);
        
    },
};
per.m1();
per.m2();

//javascript to json conversion

var jsObj = {
    name: "mangesh belge",
    age: 30,
    city: "pune",

};
var jsonObj = JSON.stringify(jsObj);
console.log(jsonObj); 

//json to javascript conversion

var obj = JSON.parse(jsonObj);
console.log(obj);


