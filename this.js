// this
//this keyword is used to access / refer  the context (current running object) inside the function
// note - 'this' works differently in arrow function & rest of function

//Context :- (current running object) - the object on which function is executed is called the context
function f1() {
  console.log("f1:", this);
}
// f1();  //global

var obj = {
  name: "abcd",
  m1: f1,
};
obj.m1();

//CALL method :- it invokes a function by substituting the object

function f1(a, b) {
  console.log(a, b);

  console.log(this);
}

var obj = { name: "my obj" };
// f1();  // global

f1.call(obj, 10, 20); //obj
f1.apply(obj, [100, 200]); //obj

//bind()
// - it creates a new function same as existing function
// - binds that newly created function with an object & returns the bounded function
// - returned will always be executed on binded object

var f2 = f1.bind(obj);

f2(99, 98);

//function recursion :-

//if a function calls itself then it is called function recursion.
//ex- print 1-10 without loop

function print(n) {
  console.log(n);
  if (n < 10) print(n + 1);
}
print(1);

//   factorial   5*4*3*2*1=120

function fact(n, mul = 1) {
  if (n > 0) {
    console.log("fact", n, mul);
    fact(n - 1, mul * n);
  } else{
    return mul;
  }
}
console.log(fact(5));


//showing factorial

function fact(n, mul = 1) {
  if (n > 0) {
    console.log("fact", n, mul);
    fact(n - 1, mul * n);
  } else{
    console.log("factorial is ", mul);
    
  }
}
fact(5);
fact(6);

//pure function :- if a function which always return same value for same input then it is called pure function

function add(a,b) {
    return a + b;
}

//impure function
function getID() {
    return Math.floor(Math.random() * 1000);
}
console.log(add(10,20));
console.log(add(10,20));
console.log(getID());
console.log(getID());


//factory function:- the function which creates & returns an object is called a factory function

function getUser(name,mobile,city) { 
    return {name, mobile, city};
    
}

var user1 = getUser("aaa","1111", "pune");
var user2 = getUser("bbb","2222", "mumbai");
console.log(user1);
console.log(user2);




