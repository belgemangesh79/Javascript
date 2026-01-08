function f1() {
  f2();
  console.log("f1");
}

function f2() {
  f3();
  console.log("f2");
}

function f3() {
  f4();
  console.log("f3");
}
function f4() {
  console.log("f4");
}

f1();
