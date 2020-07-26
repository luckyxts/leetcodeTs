/**
 * Created by Administrator on 2020/7/26.
 */
function maxValue(grid: number[][]): number {
    // 最简单的动态规划了吧
    let dp: number[][] = [];
    if( grid.length === 0 ){
        return 0;
    }
    grid.forEach( (g, i) => {
        dp[i] = [];
        g.forEach( (d, j) => {
            if(j === 0 && i === 0){
                dp[i][j] = d;
            }
            else if(j === 0 ){
                dp[i][j] = dp[i - 1][j] + d;
            }else if( i === 0){
                dp[i][j] = dp[i][j-1] + d;
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j-1]) + d;
            }
        })
    })
    return dp[dp.length - 1][dp[dp.length-1].length - 1];
};