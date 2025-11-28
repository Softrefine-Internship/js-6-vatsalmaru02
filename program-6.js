// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function fetchDataWithRetry(url, retries) {
  return new Promise((resolve, reject) => {
    const attemptFetch = (attemptsLeft) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(resolve)
        .catch((error) => {
          if (attemptsLeft > 0) {
            console.log(`Retrying... Attempts left: ${attemptsLeft}`);
            setTimeout(() => attemptFetch(attemptsLeft - 1), 2000);
          } else {
            console.log("All retry attempts failed.");
            reject(error);
          }
        });
    };

    attemptFetch(retries);
  });
}

fetchDataWithRetry("https://jsonplaceholder.typicode.com/todo/1", 3)
  .then((data) => {
    console.log("Data fetched successfully:");
    console.log(data);
  })
  .catch((error) => {
    console.error("Failed to fetch data after retries:", error);
  });
