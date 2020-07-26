/**
 * Created by Administrator on 2020/7/26.
 */
function lengthOfLongestSubstring(s: string): number {
    if( s.length <= 1 ){
        return s.length;
    }
    let res: number = 1;
    let str: string = s[0];
    let i: number = 0;
    let j: number = 1;
    while(j <= s.length - 1){
        let index = str.indexOf(s[j]);
        str += s[j];
        if( index === -1 ){
            res = Math.max(res, str.length);

        }else{
            i = index + 1;
            str = str.substring(i);
        }

        j++;
    }
    return res;
};