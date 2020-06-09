/**
 * Created by Administrator on 2020/6/9.
 */
function combinationSum2(candidates: number[], target: number): number[][] {
    let arrSort: number[] = candidates.sort( (a, b) => a - b);
    let res: number[][] = [];

    function dfs(nums: number[], target: number, sum: number, arr: number[]):void{
        if( sum === target ){
            res.push(arr.slice(0));
        }else if( sum <= target ){
            for(let i: number = 0; i < nums.length && sum + nums[i] <= target; i++){
                if( i === 0 || nums[i] !== nums[i - 1]){
                    arr.push(nums[i]);
                    dfs(nums.slice(i + 1), target, sum + nums[i], arr);
                    arr.pop();
                }
            }
        }
    }

    dfs(arrSort, target, 0, []);
    return res;
}