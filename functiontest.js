function f1() {
    return {
        name:"abc",
    };
}

function f2() {
    return 
    {
        name:"acc";
    }; 
}

console.log(f1());
console.log(f2()); 

//the arguments object: 
//the arguments object is the built in object available in the fucntion body
//the arguments object provides details like 
//:  whos is caller 
//:total number of arguments 
//: list of arguments
//:callee

function f1() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments.callee.name);
    console.log(arguments.callee.caller.name);

    
    
}

function main () {
    f1(10,20,30,40,50);
}
 main();


 function avg() {
    var sum = 0;
    for(var n of arguments) {

        if(typeof n == "number") 
            sum +=n;
 }

 return sum / arguments.length;
}
console.log(avg(10));
console.log(avg(10,20, "abc"));
console.log(avg(10,20,30));
console.log(avg(10,20,30,40,50, true));

//get total no. of parameters of a function

function f1(a,b,c) {}
function f2(a,b,c,d,e) {}
function f3(a,b,c,d,e,f,g) {}

console.log(f1.length);
console.log(f2.length);
console.log(f3.length);


  