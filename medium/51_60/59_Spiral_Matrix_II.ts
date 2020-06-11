/**
 * Created by Administrator on 2020/6/11.
 */
function generateMatrix(n: number): number[][] {
    // 先初始化， 然后跑
    let res: number[][] = [];
    for(let i: number = 0; i < n; i++){
        res[i] = [];
        for(let j: number = 0; j < n; j++){
            res[i][j] = 0;
        }
    }
    let k: number = 1;
    for(let i: number = 0; i <= Math.floor( (n - 1) / 2); i++){
        runMatrix(i, i, n - i - 1, n - i - 1)
    }

    // 跑路方程
    function runMatrix( i1: number, j1: number, i2: number, j2: number): number{
        for(let j: number = j1; j <= j2; j++){
            res[i1][j] = (k++);
        }
        for(let i: number = i1 + 1; i <= i2 && i1 < i2; i++){
            res[i][j2] = (k++);
        }
        //
        for(let j: number = j2 - 1; j >= j1 && j1 < j2; j--){
            res[i2][j] = (k++);
        }
        for(let i: number = i2 - 1; i > i1 && i1 < i2; i--){
            res[i][j1] = (k++);
        }
        return k;
    }
    return res;
}
