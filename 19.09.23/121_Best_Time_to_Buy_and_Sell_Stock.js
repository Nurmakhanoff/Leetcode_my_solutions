/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit;
};
