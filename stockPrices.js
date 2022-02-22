function best(stockPrices) {
    let best = 0;
    for (let i = 0; i < stockPrices.length; i++) {
        for (let j = i; j < stockPrices.length; j++) {
            if (getDifference(stockPrices[i], stockPrices[j]) > best) {
                best = getDifference(stockPrices[i], stockPrices[j]);
            }
        }
    }
    return best;
};

function getDifference(x, y) {
    return y - x;
};

console.log(best([7, 9, 5, 6, 3, 2]));