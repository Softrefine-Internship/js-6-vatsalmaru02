// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 1 completed");
      resolve("Result from Operation 1");
    }, 2000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 2 completed");
      resolve("Result from operation 2");
    }, 2000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 3 completed");
      resolve("Result from operation 3");
    }, 2000);
  });
}

async function performAsyncOperations() {
  try {
    const result1 = await asyncOperation1();
    console.log(result1);

    const result2 = await asyncOperation2();
    console.log(result2);

    const result3 = await asyncOperation3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
}

performAsyncOperations();

