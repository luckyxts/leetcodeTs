/**
 * Created by Administrator on 2020/7/5.
 */
function largestNumber(nums: number[]): string {
    // 拼起来比
    if (Number(nums.join("")) === 0 ){
        return 0 + ""
    }
    return nums.map( v => v+"").sort((a, b) => {
        let t1: string = a + b;
        let t2: string = b + a;
        return t1 > t2 ? 1 : -1;
    }).reverse().join("");
};