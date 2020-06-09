/**
 * Created by Administrator on 2020/6/9.
 */
function generateParenthesis(n: number): string[] {
    // 回溯法
    let res: string[] = [];

    dfs(n, n, "");

    function dfs(l: number, r: number, str: string): void{
        if( l === 0 && r === 0 ){
            res.push( str );
        }else{
            if( l > 0 ){
                dfs(l-1, r, str + "(");
            }
            if( r > 0 && l < r){
                dfs(l, r-1, str + ")");
            }
        }
    }
    return res;
}