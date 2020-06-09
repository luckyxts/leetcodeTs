/**
 * Created by Administrator on 2020/6/9.
 */
function searchRange(nums: number[], target: number): number[] {
    // 1.  寻找左侧边界
    // 2.  寻找右侧边界
    let start: number = 0;
    let end: number = nums.length - 1;
    let right: number = -1;
    let left: number = -1;
    while( start <= end ){
        let mid: number = Math.floor( ( start + end ) / 2);
        let num: number = nums[mid];
        if(start === end && (nums[end - 1] === target || num === target)){
            right = num === target ? mid : mid - 1;
            break;
        }
        if( num <= target ){
            start = mid + 1;
        }else{
            end = mid - 1;
        }

    }
    if( end < start && nums[end] === target) right = end;
    start = 0;
    end = nums.length - 1;
    while( start <= end ){
        let mid: number = Math.floor( ( start + end ) / 2);
        let num: number = nums[mid];
        if(start === end && (nums[start + 1] === target || num === target)){
            left = num === target ? mid : mid + 1;
            break;
        }
        if( num >= target ){
            end = mid - 1;
        }else{
            start = start + 1;
        }
    }
    if( end < start && nums[0] === target) left = 0;
    return [left, right]
};