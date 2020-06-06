/**
 * Created by Administrator on 2020/6/7.
 */
/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *  输入: "abcabcbb"
    输出: 3
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * */
// 1.暴力法
function lengthOfLongestSubstring(s: string): number {
    if (s === "" ) return 0;
    let max: number = 1;
    for(let i = 0; i < s.length - 1; i++){
        let str: string = s[i];
        for(let j = i + 1; j < s.length; j++){
            if ( str.indexOf(s[j]) !== -1 ){
                break;
            }
            str += s[j]
        }
        max = Math.max(max, str.length);
    }
    return max;
};

// 2.双指针
function lengthOfLongestSubstring2(s: string): number {
    if (s === "" ) return 0;
    // str始终保持不重复
    // 遇到重复就切除
    let max: number = 1;
    let start: number = 0;
    let end: number = 1;
    let str: string = s[0];
    while( end !== s.length ){
        let index: number = str.indexOf(s[end]);
        if( index !== -1 ){
            str = str.substring(index + 1, end - start  + 1);
            start = index + 1;
        }
        str += s[end];
        max = Math.max(max,  str.length);
        end++;
    }
    return max;
}

