/**
 * Created by Administrator on 2020/7/5.
 */
// 斐波那契数列
function fib(n: number): number {
    if( n === 0 ){
        return 0;
    }
    let i: number = 0;
    let j: number = 1;
    for(let k: number = 2; k <= n; k++){
        let t: number = j;
        j = (i + j) % (1e9 + 7) ;
        i = t;
    }
    return j;
};