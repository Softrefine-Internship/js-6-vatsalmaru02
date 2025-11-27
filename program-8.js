// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchDataWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      controller.abort();
      reject(new Error("Request timed out"));
    }, timeout);

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchDataWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000)
  .then((data) => {
    console.log("Data fetched successfully:");
    console.log(data);
  })
  .catch((error) => {
    console.error("Failed to fetch data with timeout:", error);
  });
