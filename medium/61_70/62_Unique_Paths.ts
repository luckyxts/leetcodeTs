/**
 * Created by Administrator on 2020/6/11.
 */
function uniquePaths(m: number, n: number): number {
    let dp: number[][] = [];
    for(let i = 0 ; i < n; i++){
        dp[i] = [];
        for(let j = 0; j < m ; j++){
            if(i === 0 || j === 0){
                dp[i][j] = 1;
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[n-1][m-1]
}