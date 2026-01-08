console.log("starting...");
try {
  console.log("starting try");
  console.log(city);
  console.log("in try");
  console.log("ending try");
} catch (error) {
  console.log("something went wrong");
  try {
    console.log("nested try");
  } catch (e) {
    console.log(e.message);
  }
} finally{
    console.log("in finally");
    
}
console.log("ending...");

