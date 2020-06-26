/**
 * Created by Administrator on 2020/6/26.
 */
function maxProduct(nums: number[]): number {
    if( nums.length === 0 ){
        return 0;
    }
    let dp: number[][] = [[nums[0], nums[0]]];
    let max: number = nums[0];

    for(let i: number = 1; i < nums.length; i++){
        let [lastMax, lastMin] = dp[i - 1];
        dp[i] = [];
        let num: number = nums[i];
        if( num > 0 ){
            dp[i] = [Math.max(lastMax * num, num), Math.min(lastMin * num, num)];
        }else{
            dp[i] = [Math.max(lastMin * num, num), Math.min(lastMax * num, num)];
        }
        max = Math.max(max, dp[i][0]);
    }
    return max;
};