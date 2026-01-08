// A A A
// B B B
// C C C
for (i= 65; i<=67; i++) { 
    var str = "";
    for(var j = 1; j<=3; j++) {
        str += " " + String.fromCharCode(i);
    }
    console.log(str);
    
}