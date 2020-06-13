/**
 * Created by Administrator on 2020/6/13.
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    // 二维数组，拉成一维，二分法
    if (matrix.length === 0){
        return false;
    }
    let n: number = matrix.length;
    let m: number = matrix[0].length;
    let start: number = 0;
    let end: number = m * n - 1;
    while( start <= end ){
        let mid: number = Math.floor((end + start) / 2);
        let i: number = Math.floor( mid / m);
        let j: number = mid % m;
        if( matrix[i][j] === target){
            return true;
        }else if( matrix[i][j] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }

    }
    return false;
}