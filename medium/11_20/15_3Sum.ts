/**
 * Created by Administrator on 2020/6/8.
 */
function threeSum(nums: number[]): number[][] {
    // 双指针
    let res: number[][] = [];
    let arr: number[] = nums.sort((a, b) => a - b);
    for(let i: number = 0; i < arr.length - 2; i++){
        // 重复不计算，大于0不计算
        if( (i > 0 && arr[i] === arr[i - 1]) || arr[i] > 0 ){
            continue;
        }
        let start: number = i + 1;
        let end: number = arr.length - 1;
        while( start < end ){
            while( start < end  && i + 1 < start && arr[start] === arr[start - 1] ) start++;
            while( start < end  && arr.length - 1 > end && arr[end] === arr[end + 1]) end--;
            if( arr[i] + arr[start] > 0 || start >= end || arr[end] < 0){
                break;
            }
            let sum: number = arr[i] + arr[start] + arr[end];
            if(sum === 0 ){
                res.push([arr[i], arr[start], arr[end]]);
                start++;
                end--;
            }else if( sum > 0){
                end--;
            }else{
                start++;
            }
        }
    }
    return res;
}