// In javaScript we should avoid for-loops and loops used in other languages
// We aim to to use functional approaches when looping
// Like map, filter, reduce, find etc.

const { fail } = require("assert");

const failures = ["misclick", "falling down", "skateboard accident", "timtom fail"];

//for (let val of failures){
  //  console.log(val);
//}

//failures.map((failure, index) => console.log(failure, index));

// Map returns a new array -> It returns an array of return values

const newFailures = failures.map((failure) => {
    return failure;
})

console.log(newFailures);

//Create a new express server from scratch.. this will be a pure Data API
// so i will call it 2._Data_API