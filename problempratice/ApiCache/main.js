import ApiCache from "./ApiCache.js";

// Usage
const apiCache = new ApiCache();
const cacheTime = 30000; // 30 seconds

// Call the function
apiCache.fetchWithCache('https://jsonplaceholder.typicode.com/posts', cacheTime)
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));