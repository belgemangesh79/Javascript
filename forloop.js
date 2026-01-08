// prime number 3,5,7,11,13,17,19
var num = 11;
var isPrime = true;

for (var i = 2; i < num; i--) {
  if (num % 2 == 0) {
    isPrime = false;
    break;
  }

  if (isPrime) {
    console.log(num + "is prime");
    break;
  } else {
    console.log(num + "is not prime");
  }
}

// print  even squares of 1-10
var nu = 1;
for (let nu = 1; nu <= 10; nu++) {
  sqr = nu * nu;
  if (sqr % 2 == 0) console.log(sqr);
}

function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n;  // handle cases when k > n
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// // rotate an array to the right by k steps.
// input : [1,2,3,4,5] , k = 2
let arr = [1, 2, 3, 4, 5, 6, 7];
let rotated = rotateRight(arr, 2);
console.log(rotated);  // [6, 7, 1, 2, 3, 4, 5]

// print 1= 0 2 = 20 3 = 4  4 = 40 5 = 8 6 = 60 7 = 12  8=80 9 = 16 10 = 100
for( i = 1; i <= 10; i++) {
  if(i % 2 == 0) {
    console.log(i * 10);
    

  } else {
    console.log(i + (i-2)); 
  }
}






