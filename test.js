//let promise = new Promise(resolve => {
//  setTimeout(() => resolve("done!"), 1000);
//});

//promise.then(result => console.log(result)); // shows "done!" after 1 second


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
  // setTimeout(() => reject(new Error("oops!!")), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => console.log(result)//, // shows "done!" after 1 second
  //error => console.log(error) // doesn't run
);

console.log("finished.");
// promise.catch(error => console.log(error));
