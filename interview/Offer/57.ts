/**
 * Created by Administrator on 2020/7/26.
 */
function twoSum(nums: number[], target: number): number[] {
    let i: number = 0;
    let j: number = nums.length - 1;
    while(i < j){
        if(nums[i] + nums[j] === target){
            return [nums[i], nums[j]];
        }else if(nums[i] + nums[j] < target){
            i++
        }else{
            j--;
        }
    }
    return [];
};
function findContinuousSequence(target: number): number[][] {
    // i - r 如果加起来小于target, r++;
    // 否则i++
    let res: number[][] = [];
    let i = 1;
    let r = 2;
    while(i < r){
        let sum: number = (i + r)*(r - i + 1)/2;
        if(sum === target){
            res.push(Array.from(Array( r - i  + 1), (v, k) => k + i));
            i++;
        }else if( sum < target){
            r++;
        }else{
            i++;
        }
    }
    return res
};