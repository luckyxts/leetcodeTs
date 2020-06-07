/**
 * Created by Administrator on 2020/6/7.
 */
/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *  输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
 * */
// 中心扩散法
function longestPalindrome(s: string): string {
    let res: string = "";
    for(let i: number = 0 ; i < s.length; i++) {
        let len1: number = calPalindromeLen(s, i, i);
        let len2: number = calPalindromeLen(s, i, i + 1);
        let max: number = Math.max(len1, len2);
        if( max > res.length ){
            res = s.substr(i - Math.floor((max - 1) / 2), max);
        }
    }
    return res;
}


// 动态规划
function longestPalindrome2(s: string): string {
    // 1.dp[i][j]表示s[i..j]是否是回文
    // 2.状态转移方程 dp[i][j] = (s[i] == s[j]) && dp[i + 1][j - 1]
    // 3.按列循环填写
    let dp: Array<Array<boolean>> = [];
    let start: number = 0;
    let res: string = "";
    if(s === ""){
        return res
    }
    res = s[0];
    while( start < s.length ){
        dp[start] = [];
        dp[start][start] = true;
        start++;
    }
    for(let j: number = 1; j < s.length; j++){
        for(let i: number = 0; i < s.length && j > i; i++){
            if (i + 1 <= j - 1) {
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            } else {
                dp[i][j] = s[i] === s[j];
            }
            // 是回文
            if( dp[i][j] && res.length < j - i + 1){
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
}


function calPalindromeLen(s: string, i: number, j: number): number{
    /**
     * 检查字最长回文
     * */
    let res: number = 0;
    while( s[i] === s[j] && i >=0 && j < s.length){
        res = j - i + 1;
        i--;
        j++;
    }
    return res;
}

