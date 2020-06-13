/**
 * Created by Administrator on 2020/6/14.
 */
function subsetsWithDup(nums: number[]): number[][] {
    // 回溯
    let res: number[][] = [];
    let dict: any = {};
    nums = nums.sort( (a, b) => a - b);
    function dfs(start: number, arr: number[]): void{
        if( !dict[ arr.join("-")]){
            dict[arr.join("-")] = true;
            res.push(arr.slice(0));
        }
        for(let i = start; i < nums.length; i++){
            arr.push( nums[i] );
            dfs(i + 1, arr);
            arr.pop();
        }
    }
    dfs(0, []);
    return res;
}