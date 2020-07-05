/**
 * Created by Administrator on 2020/7/5.
 */
// 数组去重
function findRepeatNumber(nums: number[]): number {
    let dict: any = {};
    for(let i: number = 0; i < nums.length; i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = true;
        }else{
            return nums[i];
        }
    }
    return -1;
};