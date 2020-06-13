/**
 * Created by Administrator on 2020/6/13.
 */
function removeDuplicates(nums: number[]): number {
    if( nums.length <= 1 ){
        return nums.length;
    }
    let i: number = 0;
    let j: number = i + 1;
    while( j < nums.length){
        let a: number = nums[i];
        let b: number = nums[j];
        if( a === b ){
            if( i === 0 || nums[i - 1] !== nums[i] ){
                nums[++i] = nums[j];
                j++;
            }else{
                j++;
            }
        }else{
            nums[++i] = nums[j];
            j++;
        }
    }
    return i + 1;
}

