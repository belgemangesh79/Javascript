var str = "Topper Skills x";

console.log(str.indexOf("p"));  // 2
console.log(str.indexOf("per"));// 3 
console.log((str.indexOf("kill"))); ///8

console.log(str.indexOf("x"));  //14 

//search

var str = "aa11bb34cc99";

console.log(str.search("aa")) //0 
console.log(str.search("bb")) //4 
console.log(str.search("11")) //2
console.log(str.search(/[0-9]/)) //2

//includes (substring)
// it returns true if given substring is available otherwise returns false 
 
var str = "abcd";

console.log(str.includes("abc")); //true
console.log(str.includes("pune")); //false
console.log(str.includes("abc", 0)); //true
console.log(str.includes("abc", 2)); //false


// CharAt(position):
//it returns a character available on given position
// if position is not given then it returns first character

var str = "abcdef";

console.log(str.charAt());  //a
console.log(str.charAt(0)); //a 
console.log(str.charAt(2)); //c 
console.log(str.charAt(3)); //d
console.log(str.charAt(30)); // empty

//find total "a in the string"
var str = "abcabcabcaa";
var total = 0;

for (i=0; i < str.length; i++) {
    var ch = str.charAt(i);
    if(ch == "a") total++;
}
console.log(total);

//find total digits from example
var str = "8abc123abc456";

var total = 0;
for (var i =0; i< str.length; i++) {
    var ch = str.charAt(i);
    if(ch >=0 && ch <=9) total++;

}
console.log(total);

//find total uppercase, lowercase alphabets, digits, symbol

var str = "ABabcd123&^*()";

var digits = 0;
var upper = 0;
var lower = 0;
var symbols =0;

for (var i = 0; i <str.length; i++) {
    var code = str.charCodeAt(i);
    if(code >= 48 && code <= 57) {
        digits++;
    } else if(code >= 65 && code <= 90) { 
        upper++;
    }
     else if(code >= 97 && code <= 122) {
        lower++;
    } else {
        symbols++;
    }
}
console.log("Digits:", digits);
console.log("Upper:", upper);
console.log("Lower:", lower);
console.log("Symbols:", symbols);

//round() : converts floating numbers into integer number 
//it returns integer number 
// 0-4 -> no increment
// 5-9 -> increment by 1

console.log(Math.round(123.023));
console.log(Math.round(123.145));
console.log(Math.round(123.465));
console.log(Math.round(123.499));
console.log(Math.round(123.5));
console.log(Math.round(123.567));
console.log(Math.round(123.999));











 






