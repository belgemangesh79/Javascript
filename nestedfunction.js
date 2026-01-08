//NESTED FUNCTION
// defining a function into another function is called nested function
//nested function can access variables & parameters of outer functions but outer functions cannot accesss variables of nested functions

var a = 10;
function f1(b) {
  console.log(a, b);
  function f2(c) {
    console.log(a, b, c);
    function f3(d) {
      console.log(a, b, c, d);
      function f4(e) {
        console.log(a, b, c, d, e);
      }
      f4(50);
    }
    f3(20);
  }
  f2(30);
}
f1(40);

//example

function outer(a) {
  console.log("In outer ", a);

  return function (b) {
    console.log("In nested", b);
  };
}

outer(10)(20);

//example

function add(a) {
  return function (b) {
    return a + b;
  };
}
var sum = add(10)(20);
console.log(sum); //30

//example
function add(a, b) {
  if (b) return a + b;
  return function (c) {
    return a + c;
  };
}
console.log(add(10,20));
console.log(add(10)(20));

