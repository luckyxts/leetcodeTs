/**
 * Created by Administrator on 2020/6/11.
 */
function minPathSum(grid: number[][]): number {
    let dp: number[][]= [];

    for(let i: number = 0; i < grid.length; i++){
        dp[i] = [];
        for(let j: number = 0; j < grid[i].length; j++){
            if( i === 0 && j === 0 ){
                dp[i][j] = grid[i][j];
            }else if( i === 0 ){
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            }else if( j === 0 ){
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            }else{
                dp[i][j] = Math.min( dp[i - 1][ j ], dp[i][j - 1]) + grid[i][j]
            }
        }
    }
    return dp[dp.length - 1][dp[dp.length-1].length - 1];
}