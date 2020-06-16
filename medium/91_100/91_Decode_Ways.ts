/**
 * Created by Administrator on 2020/6/14.
 */
function numDecodings(s: string): number {
    // 22 => [1,1,2]
    // dp[i - 1] + [i - 2]
    // dp[ i - 1] 要求最后一个s[i - 1]能否独立成数，所以要求不能为0
    // dp[ i - 2] 要求最后两个数字能否独立成数 所以要求  连接起来 >0 && <= 26
    let dp: number[] = [];
    dp.push(1);
    for(let i:number = 1; i < s.length + 1; i++){
        dp[i] = s[i - 1] === "0" ? 0 : dp[ i - 1];
        if( i > 1 &&  s[i - 2] !== "0" && parseInt( s[i - 2] + s[ i - 1]) <= 26 ){
            dp[i] += dp[ i - 2];
        }
    }
    return dp.pop() || 0;
}