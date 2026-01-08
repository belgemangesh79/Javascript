// var today = new Date();
// console.log(today);
// console.log(today.toString());
// console.log(today.toLocaleString());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleTimeString());


var d = new Date(2020,2,22);

console.log(d);
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

//setters to modify the date and time
var d = new Date();


d.setFullYear(2020); //d.setFullYear(2020,2,25);
d.setMonth(2);
d.setDate(30);
d.setHours(6);
d.setMinutes(32);
d.setSeconds(45);
console.log(d.toLocaleString());

//getters

var d = new Date();

console.log("Year:", d.getFullYear());
console.log("Month:", d.getMonth());
console.log("Date:", d.getDate());
console.log("Day:", d.getDay());
console.log("Hour:", d.getHours());
console.log("Minutes:", d.getMinutes());
console.log("Seconds:", d.getSeconds());
console.log("Miliseconds:", d.getMilliseconds());

console.log(d.toLocaleString());






