const p = new Promise((resolve, reject) => {

    //perform async operation here
    setTimeout(() => {

       //if async operation is successful
        resolve("data");
        //if async operation is not successful
        reject("error");
    },3000)

});

//if promise is resolved(success) then perform below activity
p.then((aa) => {
    console.log(`Resolved: ${aa}`);
    
});

//if promise is rejected(failed) then perform below activity

p.catch((err) => {
    console.log(`Promise rejected ${err}`);
    
});