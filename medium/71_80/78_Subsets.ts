/**
 * Created by Administrator on 2020/6/13.
 */
function subsets(nums: number[]): number[][] {
    let res: number[][] = [];
    let end: number = nums.length - 1;
    function dfs(start: number, arr: number[]){
        res.push(arr.slice(0));
        if( start <= end ){
            for(let i = start; i < nums.length; i++){
                arr.push( nums[i] );
                dfs( i + 1, arr);
                arr.pop();
            }
        }
    }
    dfs(0, []);
    return res;
}