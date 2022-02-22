function best(stockPrices) {
    // Initialize 'best' to 0
    let best = 0;
    for (let i = 0; i < stockPrices.length; i++) {
        // Initialize nested for loop to 'i'
        for (let j = i; j < stockPrices.length; j++) {
            // Check difference between array elements in the order they were given
            if (getDifference(stockPrices[i], stockPrices[j]) > best) {
                best = getDifference(stockPrices[i], stockPrices[j]);
            };
        };
    };
    return best;
};

function getDifference(x, y) {
    return y - x;
};

console.log(best([7, 9, 5, 6, 3, 2]));