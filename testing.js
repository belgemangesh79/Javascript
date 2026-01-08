// // console.log(a,b);

// // var a = 10;
// // var b;
// // b = 20;

// // console.log(a,b);

// function f1(b) {
//   var a = 10;
//   return function () {
//     console.log(a + b + 5);
//   };
// }
// var inner = f1(20);
// var inner2 = f1(40);
// inner();

// //function recursion : if a function calls itself then it is called function recursion.

// function print(n) {
//   console.log(n);
//   if (n < 10) print(n + 1);
// }

// print(1);

// //5 * 4 * 3 * 2 * 1 =120

// function fact(n, mul = 1) {
//     if(n > 0) {
//         fact(n - 1, mul * n);

//     }else{
//         console.log("factorial is ", mul);

//     }
// }
// fact(5);
// fact(6);

//Example

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cmds = ["even", "max"];

function even(arr) {
  return arr.filter(function (ele) {
    return ele % 2 == 0;
  });
}

function odd(arr) {
  return arr.filter(function (ele) {
    return ele % 2 != 0;
  });
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  return Math.max(...arr);
}

function sum(arr) {
  return arr.reduce(function (pre, n) {
    return pre + n;
  }, 0);
}

function op(nums, cmds) {
  var result = nums;

  for (var cmd of cmds) {
    switch (cmd) {
      case "even": {
        result = even(result);
        break;
      }
      case "odd": {
        result = odd(result);
        break;
      }
      case "min": {
        result = min(result);
        break;
      }
      case "max": {
        result = max(result);
        break;
      }
      case "sum": {
        result = sum(result);
        break;
      }
    }
  }
  return result
}

console.log(op(nums, ["even", "max"]));
console.log(op(nums, ["even", "min"]));
console.log(op(nums, ["even", "sum"]));
console.log(op(nums, ["even", "odd"]));
console.log(op(nums, ["even", "max"]));
