/**
 * Created by Administrator on 2020/6/26.
 */
function wordBreak(s: string, wordDict: string[]): boolean {
    // 动态规划
    let dp: boolean[][] = [];
    let dict: any = {};
    for( let i: number = 0; i < s.length; i++ ){
        for(let j: number = 0; j <= i; j++ ){
            if( !dp[j] ) dp[j] = [];
            let sTmp = s.substring(j, i + 1);
            if( j > 0 ) {
                dp[j][i] = Boolean(dict[j - 1]) && (wordDict.indexOf(sTmp) !== -1);
            }else{
                dp[j][i] = (wordDict.indexOf(sTmp) !== -1);
            }
            if( i === s.length - 1 && dp[j][i]){
                return true;
            }
            if( dp[j][i] ) dict[i] = true;
        }
    }
    return false;
};
