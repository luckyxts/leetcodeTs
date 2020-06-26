/**
 * Created by Administrator on 2020/6/26.
 */
function singleNumber(nums: number[]): number {
    // 根据公式计算 sum - 3 * arr
    if( nums.length === 1 ) return nums[0]
    return ((new Array(...(new Set(nums))).reduce((a, b) => a + b)) * 3 - nums.reduce( (a, b) => a + b))/2
};