/**
 * Created by Administrator on 2020/8/9.
 */
function rotate(matrix: number[][]): void {
    let i1: number = 0;
    let j1: number = 0;
    let i2: number = matrix.length - 1;
    let j2: number = matrix[0].length - 1;

    while(i1 < i2){
        switchMatrix(i1, j1, i2, j2);
        i1++;
        j1++;
        i2--;
        j2--;
    }
    function switchMatrix(i1: number, j1: number, i2: number, j2: number){
        for(let j: number = j1; j < j2; j++){
            let a: number = matrix[i1][j];
            let b: number = matrix[j][j2];
            let c: number = matrix[i2][j2 - j + j1];
            let d: number = matrix[i2 - j + i1][j1];
            matrix[j][j2] = a;
            matrix[i2][j2 - j + j1] = b;
            matrix[i2 - j + i1][j1] = c;
            matrix[i1][j] = d;
        }
    }
};