//     closure
//closure is combination of nested function & lexical scope which enables nested function to access variables of outer function even after execution of outer function
// closure provides a way to perform an operation by creating a new scope
//ex
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer(); // counter now holds the inner function
counter(); // 1
counter(); // 2
counter(); // 3

//example for closure

function createState (state) {
    var cities = [];
    return function(city) {
        cities.push(city);
        console.log("cities of " +  state  + ":", cities.join(","));
        
    };
}
var addMHCity = createState("Maharashtra");
addMHCity("Pune");
addMHCity("Mumbai");
addMHCity("Nashik");
addMHCity("Nanded");

var addAPCity  = createState("AP");
addAPCity("Vijaywada");
addAPCity("Amravati");
addAPCity("Satara");


