/**
 * Created by Administrator on 2020/8/9.
 */
function setZeroes(matrix: number[][]): void {
    let dict: any = {};

    for(let i:number = 0; i < matrix.length; i++){
        for(let j: number = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0 && !dict[`${i}-${j}`]){
                toZero(i, j, matrix);
            }
        }
    }

    function toZero(i: number , j: number, matrix: number[][]){
        let i1: number = i-1;
        let i2: number = i+1;
        while(i1 >= 0){
            if(matrix[i1][j] !== 0) dict[`${i1}-${j}`] = true;
            matrix[i1][j] = 0;
            i1--;
        }
        while(i2 <= matrix.length - 1){
            if(matrix[i2][j] !== 0) dict[`${i2}-${j}`] = true;
            matrix[i2][j] = 0;
            i2++
        }
        let j1: number = j - 1;
        let j2: number = j + 1;
        while(j1 >= 0){
            if(matrix[i][j1] !== 0) dict[`${i}-${j1}`] = true;
            matrix[i][j1] = 0;
            j1--;
        }
        while(j2 <= matrix[i].length - 1){
            if(matrix[i][j2] !== 0) dict[`${i}-${j2}`] = true;
            matrix[i][j2] = 0;
            j2++;
        }
    }
};