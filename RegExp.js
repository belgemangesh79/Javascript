// Regular Expression :- regular expression are the patterns used to check structure of a string value 
// To create regular expression 
// 1:- by using literal = /[0-9]/
//2:- bynusing 'new' 

//ex: create a pattern to check mobile value
var mobilePattern = /^[\d]+$/;
console.log(mobilePattern.test(""));
console.log(mobilePattern.test("abcd"));
console.log(mobilePattern.test("abc1123"));
console.log(mobilePattern.test("12334456"));

var city = "Pune";

var cityPat = new RegExp(city, "i");
console.log(cityPat.test(""));
console.log(cityPat.test("abc"));
console.log(cityPat.test("abcpune"));
console.log(cityPat.test("abcPunepune"));

//to check substring into string
var str = "abcd india afsghs";

var sstr = "india";
console.log(new RegExp(sstr, "i").test(str));



