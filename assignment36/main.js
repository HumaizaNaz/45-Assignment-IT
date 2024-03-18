// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have order a ".concat(size, ", shirt that says ").concat(message));
}
// Examples
makeShirt(); // Large shirt with default message
makeShirt("Medium"); // Medium shirt with default message
makeShirt("Small", "Custom message"); // Custom-sized shirt with a custom message
