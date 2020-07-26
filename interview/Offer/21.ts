/**
 * Created by Administrator on 2020/7/26.
 */
function exchange(nums: number[]): number[] {
    // 双指针
    let i: number = 0;
    let j: number = nums.length - 1;
    while(i < j){
        while(i < j && nums[i] % 2 !== 0) i++;
        while(i < j && nums[j] % 2 === 0) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    return nums;
}