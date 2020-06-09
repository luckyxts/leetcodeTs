/**
 * Created by Administrator on 2020/6/9.
 */
function combinationSum(candidates: number[], target: number): number[][] {
    let res: number[][] = [];
    candidates = candidates.sort( (a, b) => a - b);

    dfs(candidates, 0, [], target, 0);

    function dfs(nums: number[], sum: number, arr: number[], target: number, start: number){
        if( sum === target ){
            res.push( arr.slice(0).sort( (a, b) => a - b) );
        }else if( sum < target){
            for(let i:number = start; i < nums.length && sum + nums[i] <= target; i++){
                arr.push(nums[i]);
                dfs(nums, sum + nums[i], arr, target, i);
                arr.pop()
            }
        }
    }
    return res;
}