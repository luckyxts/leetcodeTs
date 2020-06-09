/**
 * Created by Administrator on 2020/6/9.
 */
function nextPermutation(nums: number[]): void {
    // 1.找到需要置换的index, 找到最小值的位置
    // 2.找到后面第一个比他大的
    // 3.队列排出
    let index: number = nums.length - 2;
    while( index >= 0 && nums[index + 1] <= nums[index]) index--;
    // 交换
    for(let i: number = nums.length - 1  ; i > index; i--){
        if(nums[index] < nums[i] ){
            // 交换
            [nums[index], nums[i]] = [nums[i], nums[index]];
            break;
        }
    }
    let m: number[] = nums.splice(index + 1);
    while( m.length > 0 ){
        nums[++index] = m.pop() || 0;
    }
};