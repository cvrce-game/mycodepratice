let obj = {
    _i: 0, // Use an internal variable to hold the actual value
    get i() {
        return ++this._i; // Increment and return the value each time it's accessed
    }
};

// Testing the output
console.log(obj.i); // 1
console.log(obj.i); // 2
console.log(obj.i); // 3