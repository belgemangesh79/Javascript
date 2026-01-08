var str1 = "Team";
var str2 = "Brainworks";

var str3 = str1.concat(str2);
console.log(str3); //TeamBrainworks

str4 = str1 + str2; // using concat operator
console.log(str4);
console.log(10 + 20); //30   when numbers are there it perform arithmatic op.for numbers.

console.log(10 + 20 + "hi"); //30hi from left to right it will perform artithmatic op. to numbers

console.log("hii" + 10 + 20); //hi1020  if first we get string then it will concat the string

console.log(10 + "20"); // 1020

//replace () : replaces a string with new string & returns the replaced string
var str = "abc pune and Pune, pune";

str = str.replace(/pune/gi, "Mumbai");

console.log(str);

//split(separator):
var str = "abc def 11ghi jkl, mno11 pqr stu,vwx11 yz";

console.log(str.split());
console.log(str.split(""));
console.log(str.split(","));
console.log(str.split("" ));




