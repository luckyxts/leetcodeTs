/**
 * Created by Administrator on 2020/7/5.
 */
// 剪绳子
function cuttingRope(n: number): number {
    let dp: any = {};
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    if( n <= 3) {
        if( n <= 2){
            return 1;
        }else{
            return 2;
        }
    }
    for(let i: number = 4; i <= n; i++){
        let max: number = 0;
        for(let j: number = 1; j <= Math.floor(i/2); j++){
            max = Math.max(max, dp[j]*dp[i - j]);
        }
        dp[i] = max;
    }
    return dp[n];
};