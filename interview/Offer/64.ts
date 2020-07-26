/**
 * Created by Administrator on 2020/7/26.
 */
function sumNums(n: number): number {
    return n == 0 ? 0 : n + sumNums(n - 1);
};