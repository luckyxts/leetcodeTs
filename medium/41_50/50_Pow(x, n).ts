/**
 * Created by Administrator on 2020/6/10.
 */
function myPow(x: number, n: number): number {
    // 分治法
    // 77 <= 38  <= 19 <= 9 <= 4 <= 2 <= 1;

    function fzf(x: number, N: number): number {
        if(N === 0){
            return 1;
        }
        let y: number = fzf(x, Math.floor(N/2));
        return N % 2 ? y * y * x : y * y;
    }

    return n >= 0 ? fzf(x, n) : 1 / fzf(x, -n);
}