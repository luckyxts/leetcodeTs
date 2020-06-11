/**
 * Created by Administrator on 2020/6/11.
 */
function canJump(nums: number[]): boolean {
    let maxPosition: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        if( i > maxPosition) return false;
        maxPosition = Math.max(maxPosition, nums[i] + i);
    }
    return true;
}

