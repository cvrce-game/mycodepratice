// Retry function with delay
export async function retry(asyncFunc, retries, delay = 50, finalError = 'Retry failed') {
    for (let i = 0; i < retries; i++) {
        try {
            return await asyncFunc(); // Attempt the function call
        } catch (error) {
            if (i === retries - 1) {
                throw new Error(finalError); // If no retries left, throw the final error
            }
            console.log(`Attempt ${i + 1} failed. Retrying after ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
        }
    }
}

// Test function
export const getTestFunc = () => {
    let callCounter = 0;
    return async () => {
        callCounter += 1;
        // Throw an error if called less than 5 times
        if (callCounter < 5) {
            throw new Error('Not yet');
        }
        return 'success'; // Return success on the 5th call
    }
};

