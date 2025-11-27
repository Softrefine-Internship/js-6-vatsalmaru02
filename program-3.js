//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

function fetchURLs(urls) {
  const fetchPromises = urls.map((url) => {
    return fetch(url)
      .then((response) => response.text())
      .catch((error) => `Error fetching ${url}: ${error.message}`);
  });

  return Promise.all(fetchPromises);
}
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

fetchURLs(urls)
  .then((results) => {
    results.forEach((content, index) => {
      console.log(`Content from URL ${urls[index]}:`);
      console.log(content);
    });
  })
  .catch((error) => {
    console.error("Error fetching URLs:", error);
  });
