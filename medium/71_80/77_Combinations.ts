/**
 * Created by Administrator on 2020/6/13.
 */
function combine(n: number, k: number): number[][] {
    // 回溯法
    let res: number[][] = [];
    function dfs(arr: number[], start: number, n: number){
        if( arr.length === k ){
            res.push(arr.slice(0));
        }else{
            for(let i = start; i <= n; i++){
                arr.push(i);
                dfs(arr, i + 1, n);
                arr.pop();
            }
        }
    }
    dfs([], 1, n);
    return res;
}