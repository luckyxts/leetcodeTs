/**
 * Created by Administrator on 2020/6/10.
 */
function permute(nums: number[]): number[][] {
    // 全排列
    let res: number[][] = [];

    function dfs( arr: number[], arrTemp: number[] ){
        if( arrTemp.length === 0 ){
            res.push(arr.slice(0))
        }else{
            for(let i = 0; i < arrTemp.length; i++){
                arr.push(arrTemp[i]);
                let tmp: number[] = arrTemp.slice(0);
                tmp.splice(i, 1)
                dfs( arr, tmp)
                arr.pop();
            }
        }
    }
    dfs([], nums);
    return res;
}