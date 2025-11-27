// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function repeatFunctionAtInterval(fun, interval) {
  return setInterval(fun, interval);
}

const intervalFunction = repeatFunctionAtInterval(() => {
  console.log("Function executed at interval");
}, 2000);

setTimeout(() => {
  clearInterval(intervalFunction);
  console.log("Interval cleared");
}, 10000);
