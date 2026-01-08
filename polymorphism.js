// //polymorphism: multiple methods with same name but different parameter
// //method overloading: javascript doesnot support this method overloading



class Addition {
  sum(a, b) {
    console.log("2");

    return a + b;
  }
  sum(a, b, c) {
    console.log("3");

    return a + b + c;
  }
  sum(a, b, c, d) {
    console.log("4");

    return a + b + c + d;
  }
}

const obj = new Addition();

console.log(obj.sum(10, 20));
console.log(obj.sum(10, 20, 30));
console.log(obj.sum(10, 20, 30, 40));


//synchronous vs asynchronous


console.log("one");
setTimeout (() => {
    console.log("A");
    
},1000);

console.log("two");

setTimeout(() => {
    console.log("B");
    
},1000);

console.log("Three");



