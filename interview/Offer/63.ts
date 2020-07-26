/**
 * Created by Administrator on 2020/7/26.
 */
function maxProfit(prices: number[]): number {
    let max: number = 0;
    for(let i:number = 0 ; i < prices.length; i++){
        for(let j:number = i + 1; j < prices.length; j++){
            max = Math.max(prices[j] - prices[i], max);
        }
    }
    return max;
};