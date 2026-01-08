// find larger Number among three Number
// a = 10,b=20, c=30;
var a = 20,
  b = 30,
  c = 40;
if (a > b && a > c) {
  console.log(a + "is greater");
} else {
  if (b > a && b > c) {
    console.log(b + "is greater");
  } else {
    console.log(c + "is greater");
  }
}

// find the score of student
var per = 65;

if (per > 100 || per < 0) console.log("invalid percentage");
else if (per > 80) console.log("distinction");
else if (per > 60) console.log("distinction");
else if (per > 50) console.log("distinction");
else if (per > 40) console.log("distinction");
else if (per > 35) console.log("distinction");
else console.log("failed");
// if statement  is in single line we can use without curly braces for console.log

// if number is fully divided by 3 & 5 then print "mangesh belge"
// if divisible by 3 then print "Mangesh "
// if divisible by 5 then print "Belge"
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + "Mangesh Belge");
  } else if (i % 3 == 0) {
    console.log(i + "Mangesh");
  } else if (i % 5 == 0) {
    console.log(i + "Belge");
  }
}

//  factorial of 5 
var num = 5;
var fact = 1;
for (var i = num; i > 0; i--) {
    fact = fact * i;
}
console.log(fact); 




