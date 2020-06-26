/**
 * Created by Administrator on 2020/6/21.
 */
function minimumTotal(triangle: number[][]): number {
    let res = 0;
    let dp: number[][] = [];
    if(triangle.length === 0){
        return 0;
    }
    triangle.forEach((list, i) => {
        dp.push([]);
        if( i === 0 ){
            dp[i].push(list[0]);
            res = list[0];
        }else{
            res = Infinity;
            list.forEach( (v, index) => {
                if(index === 0 ){
                    dp[i][index] = v + dp[i - 1][index];
                }else if( index === list.length - 1){
                    dp[i][index] = v + dp[i - 1][index - 1];
                }else{
                    dp[i][index] = Math.min(dp[i - 1][index - 1], dp[i - 1][index]) + v;
                }
                res = Math.min(dp[i][index], res);
            })
        }
    });
    return res;
}