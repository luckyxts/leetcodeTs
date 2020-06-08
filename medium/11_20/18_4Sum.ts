/**
 * Created by Administrator on 2020/6/8.
 */
function fourSum(nums: number[], target: number): number[][] {
    let res: number[][] =[];
    let arr: number[] = nums.sort((a, b) => a - b);
    for(let i: number = 0; i < arr.length - 3; i++){
        if( i > 0 && arr[i] === arr[i-1]) continue;
        for(let j: number = i + 1; j < arr.length - 2; j++){
            if( j > i + 1 && arr[j] === arr[j-1]) continue;
            let start: number = j + 1;
            let end: number = arr.length - 1;
            while( start < end ){
                while( start < end && start > j + 1 && arr[start] === arr[ start - 1]) start++;
                while( start < end && end < arr.length - 1 && arr[end] === arr[end + 1]) end--;
                if( start >= end ) break;
                let sum: number = arr[i] + arr[j] + arr[start] +arr[end];
                if( sum === target){
                    res.push( [arr[i], arr[j], arr[start], arr[end]]);
                    start++;
                    end--;
                }else if( sum > target ){
                    end--;
                }else{
                    start++;
                }

            }
        }
    }
    return res;
}