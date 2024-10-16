export default class ApiCache {
    constructor() {
        this.cache = new Map();
    }

    async fetchWithCache(url, cacheTime) {
        const cachedData = this.cache.get(url);
        const currentTime = Date.now();

        // Check if data is cached and not expired
        if (cachedData && (currentTime - cachedData.timestamp) < cacheTime) {
            console.log("Returning cached data");
            return cachedData.response;
        }

        // Fetch fresh data and store it in the cache with a timestamp
        const response = await fetch(url);
        const data = await response.json();

        this.cache.set(url, {
            response: data,
            timestamp: currentTime
        });

        return data;
    }
}