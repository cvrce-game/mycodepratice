function fetchWithTimeout(url, timeInMilliseconds) {
    // Create a timeout promise that rejects after the specified time
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Request timed out after ${timeInMilliseconds}ms`));
        }, timeInMilliseconds);
    });

    // Use Promise.race to race the fetch promise against the timeout promise
    return Promise.race([
        fetch(url),   // The fetch promise
        timeoutPromise // The timeout promise
    ]);
}

// Usage example
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 3000)
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));