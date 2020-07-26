/**
 * Created by Administrator on 2020/7/26.
 */
function maxSubArray(nums: number[]): number {
    let res: number = -Infinity;
    let tmp = 0;
    nums.forEach( n => {
        tmp += n;
        if( tmp < n ){
            tmp = n;
        }
        res = Math.max(res, tmp);
    })
    return res;
};