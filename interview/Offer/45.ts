/**
 * Created by Administrator on 2020/7/26.
 */
function minNumber(nums: number[]): string {
    // 这题最骚的是，居然可以拼起来比
    nums.sort( (a, b) => {
        let str1: number = Number(a + "" + b);
        let str2: number = Number(b + "" + a);
        return str1 < str2  ? -1 : 1;
    })
    return nums.join("");
};