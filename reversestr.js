var str = "Team Brainworks";
var rstr = "";

for (var i = 0; i < str.length; i++) {
    rstr = str.charAt(i) + rstr;
}
console.log(rstr);

//or by using join method 
//first string to array
var arr = str.split("");
//reverse the array
arr.reverse();
//arr to string 
 var rstr2 = arr.join("");
 console.log(rstr2); 
 console.log(str.split("").reverse().join(""));

 
 
  


