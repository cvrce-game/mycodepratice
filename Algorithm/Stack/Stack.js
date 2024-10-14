export default class Stack {
    // Step 2: Create a static property to hold the single instance
    static instance = null;
    stack;
    top;

    // Step 3: Private constructor
    constructor() {
        if (Stack.instance) {
            throw new Error("Cannot create multiple instances of Stack. Use Stack.getInstance() instead.");
        }
        Stack.instance = this;
        this.stack = new Array(5).fill(0); // Initialize stack with zeros
        this.top = -1; // Initialize top to -1, indicating an empty stack
    }

    // Step 4: Static method to access the instance
    static getInstance() {
        if (!Stack.instance) {
            Stack.instance = new Stack(); // Create a new instance if it doesn't exist
        }
        return Stack.instance; // Return the existing instance
    }

    push(element) {
        if (this.isFull()) {
            console.log("Stack is full");
            return;
        }
        this.top++;
        this.stack[this.top] = element;
        console.log(`${element} pushed to stack`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const poppedElement = this.stack[this.top];
        console.log(`${poppedElement} popped from stack`);
        this.top--;
        return poppedElement;
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return null;
        }
        console.log(`Top element is ${this.stack[this.top]}`);
        return this.stack[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.stack.length - 1;
    }
}