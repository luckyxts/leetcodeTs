/**
 * Created by Administrator on 2020/7/5.
 */
function reverseWords(s: string[]): void {
    let i: number = 0;
    let j: number = s.length - 1;
    reverse(s, i, j);
    j = i + 1;
    while(i < s.length ){
        while( j < s.length && s[j] != ' ') j++;
        reverse(s, i, j - 1);
        i = j + 1;
        j = i + 1;
    }

    function reverse(s: string[], i: number, j: number): void{
        while( i < j ){
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }
};