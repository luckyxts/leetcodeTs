/**
 * Created by Administrator on 2020/7/5.
 */
// 数值的整数次方
function myPow(x: number, n: number): number {
    // 深度返回
    function dfs(base: number, exponent: number): number{
        if(exponent === 0){
            return 1;
        }
        let res: number = dfs(base, Math.floor(exponent/2));
        return exponent % 2 ? res * res * base: res * res;
    }
    return n >= 0 ? dfs(x, n) : 1 / dfs(x, -n);
};