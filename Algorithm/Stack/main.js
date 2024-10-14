import Stack  from "./Stack.js";

const stack = Stack.getInstance();
console.log(Stack.getInstance());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();

console.log(Stack.getInstance());