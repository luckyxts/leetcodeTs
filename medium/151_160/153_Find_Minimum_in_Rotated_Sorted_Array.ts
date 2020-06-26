/**
 * Created by Administrator on 2020/6/26.
 */
function findMin(nums: number[]): number {
    // 旋转的话，左边第一个如果比中间小，则肯定在右边，说明左边有序
    if( nums.length === 0 ) return -1;
    if( nums.length === 1) return nums[0];
    if( nums[0] < nums[nums.length - 1]) return nums[0];
    let left: number = 0;
    let right: number = nums.length - 1;
    while(left <= right){
        let mid: number = Math.floor( (left + right) / 2 );
        if( nums[mid] < nums[mid - 1]){
            return nums[mid];
        }else if(nums[mid] > nums[mid + 1]){
            return nums[mid + 1];
        }
        if( nums[mid] > nums[left]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
};