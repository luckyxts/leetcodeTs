/**
 * Created by Administrator on 2020/8/9.
 */
function compressString(S: string): string {
    let res: string = "";
    let i: number = 0;
    let j: number = 0;
    let tmpCount: number = 1;
    while(j < S.length ){
        if(i === j){
            res += S[i];
            j++;
        }else if( S[i] === S[j] ){
            j++;
            tmpCount++;
        }else{
            res += tmpCount;
            i = j;
            tmpCount = 1;
        }
    }
    res = res + tmpCount ;
    return res.length < S.length ? res : S;
};