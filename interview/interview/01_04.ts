/**
 * Created by Administrator on 2020/8/9.
 */
function canPermutePalindrome(s: string): boolean {
    //
    let dict: any = {};
    let single: number = 0;
    for(let i: number = 0; i < s.length; i++){
        if(!dict[s[i]]) dict[s[i]] = 1;
        else dict[s[i]] += 1;
    }
    Object.keys(dict).forEach( (s) => {
        if(dict[s] % 2 !== 0) single++;
    });
    return single <= 1;
};