/**
 * Created by Administrator on 2020/7/5.
 */
// 打印从1到最大的n位数
function printNumbers(n: number): number[] {
    let max: number = 0;
    for(let i:number = 1; i <= n; i++){
        max += 10 ** (i-1) * 9
    }
    let res: number[] = [];
    for(let i:number = 1; i<= max; i++){
        res.push(i);
    }
    return res;
};