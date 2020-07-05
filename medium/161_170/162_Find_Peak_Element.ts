/**
 * Created by Administrator on 2020/7/5.
 */
function findPeakElement(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    if( nums.length === 1 ) return 0;
    if( nums[0] > nums[1] ) return 0;
    if( nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
    while( left <= right ){
        let mid: number = Math.floor( (left + right) / 2 );
        if( nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
            return mid;
        }
        if( nums[mid] > nums[mid - 1] || mid === 0){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
};