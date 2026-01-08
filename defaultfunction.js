function add (a,b, c = a * 0.5) {
    return a + b + c;
}

console.log(add());
console.log(add(10));
console.log(add(10, 20));
console.log(add(10, 20,20));
