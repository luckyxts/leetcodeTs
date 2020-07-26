/**
 * Created by Administrator on 2020/7/26.
 */
function translateNum(num: number): number {
    let res: number = 0;
    let s: string = num + "";
    function dfs(i: number, s: string){
        if( i > s.length - 1){
            res += 1;
        }else{
            dfs(i + 1, s);
            if( i < s.length - 1 && s[i] !== "0"){
                let n: number = Number(s.substring(i, i + 2));
                if( n <= 25 ){
                    dfs(i + 2, s);
                }
            }
        }
    }
    dfs(0, s);
    return res;
};