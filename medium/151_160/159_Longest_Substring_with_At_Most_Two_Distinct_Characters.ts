/**
 * Created by Administrator on 2020/7/5.
 */
function lengthOfLongestSubstringTwoDistinct(s: string): number {
    let dict: any = {};
    let max: number = 0;
    if( s.length <= 2 ){
        return s.length;
    }
    let i: number = 0;
    let j: number = 0;
    dict[s[0]] = 1;
    while( j < s.length){
        if( Object.keys(dict).length <= 2 ){
            dict[s[j]] = j;
            j++;
        }
        if( Object.keys(dict).length > 2 ){
            let key: string = "";
            let index: number = -1;
            for(let k in dict){
                if(dict[k] < dict[key] || key === ""){
                    key = k;
                    index = dict[k];
                }
            }
            delete dict[key];
            i = index + 1;
        }
        max = Math.max(max, j - i);
    }
    return max
};