// // if([] == true) {
// //     console.log("abcent");

// // }else{
// //     console.log("present");

// // }

// let obj = {
//     a : {
//         b:undefined
//     }
// }
// console.log(obj.a?.b?.c?.d??"mangesh");   //left hand value is undefined so printing mangesh

// var abc = 23;
// if(function f() {}) {
//     abc = abc + typeof f;
// }
// console.log(abc);

console.log(100 + "8");

let abc = 100;
if (function xyz() {}) {
  abc = abc - typeof xyz;
}
console.log(abc); //NaN

var bca = 100;
if (function xyz() {}) {
  abc = abc + typeof xyz;
}
console.log(bca);

function cds() {}
console.log(typeof cds);







let obj = {
  xyz: "mangesh",
  pqr: function () {
    console.log(this.xyz);
  },
};

const c = obj.pqr;
obj.pqr;
c();       // undefined




  