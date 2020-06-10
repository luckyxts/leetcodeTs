/**
 * Created by Administrator on 2020/6/10.
 */
function rotate(matrix: number[][]): void {
    // 1,从外层开始，依次旋转
    for(let start: number = 0, end: number = matrix[0].length - 1; start < end; start++, end--){
        for(let s: number = start, e: number = end; s < end; s++, e--){
            let temp: number = matrix[start][s];
            matrix[start][s] = matrix[e][start];
            matrix[e][start] = matrix[end][e];
            matrix[end][e] = matrix[s][end];
            matrix[s][end] = temp;

        }
    }
}