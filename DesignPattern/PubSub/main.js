import PubSub from "./PubSub.js";

// Create a PubSub instance
const pubSub = new PubSub();

// Define some example listeners
const onUserLogin = (data) => console.log(`User logged in: ${data.username}`);
const onUserLogout = (data) => console.log(`User logged out: ${data.username}`);

// Subscribe to events
pubSub.subscribe('userLogin', onUserLogin);
pubSub.subscribe('userLogout', onUserLogout);

// Publish events
pubSub.publish('userLogin', { username: 'JohnDoe' });
pubSub.publish('userLogout', { username: 'JohnDoe' });

// Unsubscribe from an event
pubSub.unsubscribe('userLogin', onUserLogin);

// Attempt to publish again to test unsubscribe
pubSub.publish('userLogin', { username: 'Papun' }); // No output, since it was unsubscribed