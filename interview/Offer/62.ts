/**
 * Created by Administrator on 2020/7/26.
 */
function lastRemaining(n: number, m: number): number {
    // 约瑟夫环
    let f = 0;
    for (let i = 2; i != n + 1; ++i)
        f = (m + f) % i;
    return f;
};