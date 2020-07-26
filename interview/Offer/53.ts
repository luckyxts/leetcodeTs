/**
 * Created by Administrator on 2020/7/26.
 */
function search(nums: number[], target: number): number {
    if( nums.indexOf(target) === -1) return 0;
    return nums.lastIndexOf(target) - nums.indexOf(target) + 1;
};