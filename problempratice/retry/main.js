import { retry, getTestFunc } from "./retry.js";

// Testing the code
const test = async () => {
    try {
        await retry(getTestFunc(), 10); // 10 retries allowed
        console.log('success');
    } catch (error) {
        console.error(error.message);
    }

    try {
        await retry(getTestFunc(), 3); // Only 3 retries allowed
        console.log('will fail before getting here');
    } catch (error) {
        console.error(error.message);
    }
};

// Run the test
test();