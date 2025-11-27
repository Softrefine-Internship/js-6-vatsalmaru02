// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function fetchDataWithRetry(urls, retries) {
  return fetch(urls)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      setTimeout(() => {
        if (retries > 0) {
          console.log(`Retrying... Attempts left: ${retries}`);
          return fetchDataWithRetry(urls, retries - 1);
        } else {
          console.log("All retry attemps failed.");
          throw error;
        }
      }, 2000);
    });
}

fetchDataWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then((data) => {
    console.log("Data fetched successfully:");
    console.log(data);
  })
  .catch((error) => {
    console.error("Failed to fetch data after retries:", error);
  });
