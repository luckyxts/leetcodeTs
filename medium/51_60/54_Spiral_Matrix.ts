/**
 * Created by Administrator on 2020/6/10.
 */
function spiralOrder(matrix: number[][]): number[] {
    // 递归，一层一层的绕
    if(matrix.length === 0){
        return [];
    }
    function dg(i1: number,j1: number,i2: number,j2: number,res: number[]): void{
        for(let j = j1 ; j < j2 + 1 && i2 >= i1 ;j++ ){
            res.push(matrix[i1][j]);
        }
        for(let i = i1 + 1 ; i < i2 && j2 >= j1; i++){
            res.push(matrix[i][j2]);
        }
        for(let j = j2; j > j1-1 && i2 > i1 ;j--){
            res.push(matrix[i2][j]);
        }
        for(let i = i2 - 1; i > i1  && j2 > j1 ; i--){
            res.push(matrix[i][j1]);
        }
    }
    let res: number[] = [];
    let m: number = matrix.length;
    let n: number = matrix[0].length;

    let i1: number = 0 , j1: number = 0 , i2: number = m - 1 , j2: number = n - 1;
    while(i1 <= i2 || j1 <= j2){
        dg(i1,j1,i2,j2 , res);
        i1++;j1++;
        i2--;j2--;
    }
    return res;
}