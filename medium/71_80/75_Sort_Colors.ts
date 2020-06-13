/**
 * Created by Administrator on 2020/6/13.
 */
function sortColors(nums: number[]): void {
    // 三指针, left, cur, right;
    // 1, cur === 2 , swap(cur, right) right--;
    // 2, cur === 1 , cur++;
    // 3, cur === 0 , swap(cur, left) left++, cur++
    let cur: number = 0;
    let left: number = 0;
    let right: number = nums.length - 1;
    while( cur <= right ){
        let num: number = nums[cur];
        if( num === 2){
            [ nums[cur], nums[right]] = [ nums[right], nums[cur]];
            right--;
        }else if( num === 1){
            cur++;
        }else{
            [ nums[cur], nums[left] ]= [nums[left], nums[cur]];
            cur++;
            left++;
        }
    }

}