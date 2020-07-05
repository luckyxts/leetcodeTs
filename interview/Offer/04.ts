/**
 * Created by Administrator on 2020/7/5.
 */
// 二维数组中的查找
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    if(matrix.length === 0){
        return false;
    }
    let left: number = 0;
    let n: number = matrix.length - 1;
    let m: number = 0;
    while( n >= 0 && m < matrix[0].length){
        if( matrix[n][m] > target){
            n--;
        }else if(matrix[n][m] < target){
            m++;
        }else{
            return true;
        }
    }
    return false;
};