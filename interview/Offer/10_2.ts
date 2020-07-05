/**
 * Created by Administrator on 2020/7/5.
 */
// 青蛙跳台阶问题
function numWays(n: number): number {
    if( n === 1 ){
        return 1;
    }
    let i: number = 1;
    let j: number = 1;
    for(let k: number = 2; k <= n; k++){
        let t: number = j;
        j = (i + j) % (1e9 + 7) ;
        i = t;
    }
    return j;
};