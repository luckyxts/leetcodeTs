/**
 * Created by Administrator on 2020/6/9.
 */
function search(nums: number[], target: number): number {
    // 2分法
    // 总有一边是有序的，找到有序的一侧，进行比较
    let start: number = 0;
    let end: number = nums.length - 1;
    while( start <= end ){
        let mid: number = Math.floor((start + end)/2);
        let num: number = nums[mid];
        if( num === target ) {
            return mid;
        }
        // 左边有序
        if( nums[start] < num ){
            if(target >= nums[start] && target <= nums[mid - 1] ){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else{
            if( target >= nums[mid + 1] && target <= nums[end] ){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1;
}