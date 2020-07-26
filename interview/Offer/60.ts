/**
 * Created by Administrator on 2020/7/26.
 */
function twoSum(n: number): number[] {
    let dp: number[][] = [
        [],
        [0,1,1,1,1,1,1]
    ];
    let res: number[] = [];
    for(let i: number = 2; i <= n; i++){
        dp.push([]);
        for(let j: number = i; j <= i * 6; j++){
            for(let k: number = 1; k <= 6; k++){
                if(j - k <= 0){
                    break;
                }
                if(!dp[i][j]) dp[i][j] = 0;
                if(!dp[i - 1][j - k]) dp[i][j] += 0;
                else{
                    dp[i][j] += dp[i - 1][j - k];
                }
            }
        }
    }
    let sum = Math.pow(6, n);
    for(let i: number = n; i <= 6*n; i++){
        res.push(
            dp[n][i] / sum
        )
    }
    return res;
};