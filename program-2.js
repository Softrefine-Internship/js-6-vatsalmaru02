// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("Data fetched successfully:");
    console.log(data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from example usage.");
  });
