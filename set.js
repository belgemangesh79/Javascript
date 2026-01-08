const arr = [111,2222,3333,4444,4444,4444,3333];

//create a set with existing values

const pincodes = new Set(arr);

//add elements to the set

pincodes.has(5555);
pincodes.has(2222);
pincodes.has(8888);
pincodes.has(7777);

//check whether element available or not
console.log(pincodes.has(3333));   //true
console.log(pincodes.has(9999));   //false

//delete an element from set
console.log(pincodes.delete(2222));


for(const ele of pincodes) {
    console.log(ele);
    
}

var nums = [10,20,10,20,30,30,30,40,10,20,30,40,50];
//remove all duplicates
const s = new Set(nums);
//convert set to array
const arr2 = Array.from(s);

console.log(arr2);
console.log(Array.from(new Set(nums)));



