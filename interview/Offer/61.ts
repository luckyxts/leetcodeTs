/**
 * Created by Administrator on 2020/7/26.
 */
function isStraight(nums: number[]): boolean {
    nums.sort( (a, b) => a - b);
    let hasZero = 0;
    for(let i: number = 0; i < nums.length ; i++){
        if(nums[i] === 0){
            hasZero++;
        }else if( nums[i-1] !== 0 && i > 0){
            let d: number = nums[i] - nums[i - 1];
            hasZero -= (d - 1);
            if( hasZero < 0 || d === 0){
                return false;
            }
        }
    }
    return true;
};