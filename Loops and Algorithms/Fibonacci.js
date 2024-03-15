function generateFibonacciSeries(num) {
    let fibonacciSeries = [0, 1];

    for (let i = 2; i < num; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    return fibonacciSeries.slice(0, num);
}