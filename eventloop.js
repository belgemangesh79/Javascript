console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");







//callback function





function fetchData(cb) {
  setTimeout(() => {
    console.log("fetched the data...");
    cb();
  }, 2000);
}

function displayData() {
  console.log("Displaying...");
}

fetchData(displayData);
