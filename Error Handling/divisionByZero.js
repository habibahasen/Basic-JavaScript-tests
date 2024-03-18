function divide(a, b) {
    if (b === 0) {
        throw new Error("Error: Division by zero is not allowed.");
    }
    return a / b;
}


try {
    console.log(divide(10, 2));
    console.log(divide(5, 0)); 
} catch (error) {
    console.log(error.message);
}
