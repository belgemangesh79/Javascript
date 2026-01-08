//FUNCTION
//functions are the names blocks of logically related statements.
//functions are used to perform reusable operations.
//benefits of functions - code reusability & - code modularity.

// FUNCTION ARGUMENT
//function argument are values passed to function call.
//arguments can be values, variables, expressions.
//arguments are assigned to parameters is left to right sequence.
//ex

function add(a, b) {
  console.log("sum:", a + b);
}
add();
add(10);
add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40);

// function return statements
// - the return statements is used to terminate the execution of a function & returns some values to caller function.
// - return statement return the value if value isnot given then it return unidentified.
//ex

function add(a, b) {
  var sum = a + b;
  return sum;
}
var sum = add(10, 20);
console.log("sum:", sum);

//       the 'arguments' object
//the arguments object is built in object available in function body.
//the arguments object provides details like - who is caller
// total number of arguments
// list of arguments
// who is callee

function f1() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments.callee.name);
  console.log(arguments.callee.caller.name);
}
function main() {
  //here main is caller
  // f1 is callee
  f1(10, 20, 30, 40);
}

main();

//example

function add() {
  var sum = 0;
  for (var n of arguments) {
    if (typeof n == "number") sum += n;
  }
  return sum;
}
console.log(add(10)); //10
console.log(add(10, 20, "abc")); //30
console.log(add(10, 20, 30)); //60
console.log(add(10, 20, 30, 40, 50, true)); //150

//find average of numbers

function add() {
  var sum = 0;
  for (var n of arguments) {
    if (typeof n == "number") sum += n;
  }
  return sum / arguments.length;
}
console.log(add(10)); //10
console.log(add(10, 20, "abc")); //10
console.log(add(10, 20, 30)); //20
console.log(add(10, 20, 30, 40, 50, true)); //25

//get total number of parameter of function
function f1(a, b, c) {}
function f2(a, b, c, d, e) {}
function f3(a, b, c, d, e, f, g) {}

console.log(f1.length); //3
console.log(f2.length); //5
console.log(f3.length); //7

//example of nested function

function add(a) {
  return function (b) {
    return a + b;
  };
}
var sum = add(10)(20);
console.log(sum); //30

//ex
function add(a, b) {
  //if(b) return a + b;
  if (arguments.length > 1) return a + b;
  return function (c) {
    return a + c;
  };
}
console.log(add(10, 20));
console.log(add(10)(20));

//     scope
//the level of accessibility/ availability of a variable in the program is called scope

//types of scope
//Global scope
//Function scope
//Block scope

//ex.

var a = 10; //global
console.log(a);

function f1() {
  var b = 20; //function
  console.log(a, b, c); //here var keyword for {c} donot follow block scope so output willbe undefined

  if (true) {
    var c = 30; //block
    console.log(a, b, c);
  }
}
f1();

//function declaration vs function expression

//if function definition starts with 'function' keyword then it is called function declaration
//function declaration are hoisted

//if function definition doesnot starts with 'function' keyword then it is function expression
// function expression are not hoisted

f1();
f2();

//function declaration
function f1() {
  console.log("f1");
}
//function expression
var f2 = function () {
  console.log("expression");
};
