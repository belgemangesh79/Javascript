function add(a, b, ...args) {
    console.log(a,b);
    console.log(args);
    
    
}
add(10,20,30,40,50,60,70,80);


const arr = [10,20,30,40,50,60,70];

const[a, b, ,c, ...nums] = arr;
console.log(a,b,c);
console.log(nums);


const obj = {
    v:"vvv",
    w:"www",
    x:"xxx",
    y:"yyy",
    z:"zzz",
};

const{v,w,y,...props} = obj;
console.log(v,w,y);
console.log(props);





