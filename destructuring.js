//Array destructuring

var arr = [10,20,30,40,50,60];

var [a,b,c] = arr;

console.log(a,b,c);  //10,20,30


//object destructuring

var obj = {
    name: "Topper Skills",
    age: 5,
    city:"Pune",
    mobile:"8485094969",
};

var {name,age,mobile} = obj;

console.log(name,mobile, age);
