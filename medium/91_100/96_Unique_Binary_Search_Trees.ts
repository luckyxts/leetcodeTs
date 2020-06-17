/**
 * Created by Administrator on 2020/6/17.
 */
function numTrees(n: number): number {
    // f(i, n) = g(i - 1) * g(n - i);
    // g(n) = f(i, n) (i=1, i=n)累加
    let dp: number[] = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i: number = 2; i <= n; i++){
        dp[i] = 0;
        for(let j: number = 1; j <= i; j++){
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};
