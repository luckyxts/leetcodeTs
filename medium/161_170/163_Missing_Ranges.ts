/**
 * Created by Administrator on 2020/7/5.
 */
var findMissingRanges = function(nums, lower, upper) {
    r = []
    nums.unshift(lower - 1);
    nums.push(upper + 1);
    for(let i = 1; i < nums.length; i++ ){
        if (nums[i] - nums[i - 1] > 2){
            r.push( (nums[i - 1] + 1) + '->' + (nums[i] - 1))
        }
        else if(nums[i] - nums[i - 1] == 2){
            r.push("" + (nums[i] - 1))
        }
    }
    return r
};