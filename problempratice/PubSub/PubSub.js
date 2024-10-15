export default class PubSub {
    constructor() {
        this.events = {}; // Object to hold event names and their listeners
    }

    // Method to subscribe to an event
    subscribe(event, listener) {
        // Initialize the event with an empty array if it doesn't exist
        if (!this.events[event]) {
            this.events[event] = [];
        }
        // Add the listener to the event
        this.events[event].push(listener);
        console.log(`Subscribed to ${event}`);
    }

    // Method to unsubscribe from an event
    unsubscribe(event, listener) {
        if (!this.events[event]) return;

        // Filter out the specified listener from the event
        this.events[event] = this.events[event].filter(subscribedListener => subscribedListener !== listener);
        console.log(`Unsubscribed from ${event}`);
    }

    // Method to publish an event to all subscribers
    publish(event, data) {
        if (!this.events[event]) return;

        // Call each listener with the provided data
        this.events[event].forEach(listener => listener(data));
        console.log(`Published event ${event} with data: ${data.username}`);
    }
}