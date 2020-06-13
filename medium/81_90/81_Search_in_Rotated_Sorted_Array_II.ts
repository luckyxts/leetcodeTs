/**
 * Created by Administrator on 2020/6/13.
 */
function search(nums: number[], target: number): boolean {
    // 必然一边有序
    let start: number = 0;
    let end: number = nums.length - 1;
    while( start <= end ){
        let mid: number = Math.floor((end + start)/2);
        let num: number = nums[mid];
        if( num === target ){
            return true;
        }
        // 如果开始===中间，无法判断是否一侧是否有序，start++;
        if( nums[start] === num ){
            start++;
        }
        // 左边有序的情况
        else if( nums[start] <= nums[mid - 1] ){
            // console.log(mid);
            // 有序落在左边
            if( target >= nums[start] && target <= nums[mid - 1] ){
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
    return false;
}