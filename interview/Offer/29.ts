/**
 * Created by Administrator on 2020/7/26.
 */
function spiralOrder(matrix: number[][]): number[] {

    let res: number[] = [];
    if(matrix.length === 0){
        return [];
    }
    function printM(matrix: number[][], i1: number, j1: number, i2: number, j2: number): void{
        for(let j: number = j1; j <= j2 && i1 <= i2; j++ ){
            res.push(matrix[i1][j]);
        }
        for(let i: number = i1 + 1; i <= i2  && j2 >= j1; i++){
            res.push(matrix[i][j2]);
        }
        for(let j: number = j2 - 1; j >= j1 && i1 < i2; j--){
            res.push(matrix[i2][j]);
        }
        for(let i: number = i2 - 1; i > i1 && j1 < j2; i--){
            res.push(matrix[i][j1]);
        }
    }
    let i1: number = 0;
    let j1: number = 0;
    let i2: number = matrix.length - 1;
    let j2: number = matrix[0].length - 1;

    while( i1 <= i2 || j1 <= j2){
        printM(matrix, i1, j1, i2, j2);
        i1++; j1++;
        i2--; j2--;
    }

    return res;
};